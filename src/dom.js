import { create } from './utils/create'
import { isDom, isNode } from './utils/typeChecks'
import { runAndReturnFactory } from './utils/run'
import { registerSetter } from './utils/setters'
import { isString, isObject, isArrayLike, makeSureItsAnArray, times } from '@t1m0thy_michael/u'

import { attribute } from './methods/attributes'
import { classes } from './methods/classes'
import { event } from './methods/events'
import { form } from './methods/form'
import { insertion } from './methods/insertion'
import { selection } from './methods/selection'
import { styles } from './methods/styles'
import { viewport } from './methods/viewport'

// dynamic getter - required to deal with circular deps within method modules
export const getPrototype = (()=> {
	let DOM = false
	return () => {
		if(!DOM){
			DOM = Object.assign(
				{
					eventbus: null,
					toString: function () { return '[object Dom]' },
				},
				attribute,
				classes,
				event,
				form,
				insertion,
				selection,
				styles,
				viewport,
			)
		}
		return DOM
	}
})()

export const createDomProperties = () => {
	return { 
		data: new Map(), 
		def: {},
		event: { 
			subscriptions: [], 
			on: [] 
		},
		on: {},
	}
}

export const createDomElement = (initiator) => {
	// Already a node, just add required properties
	if (initiator instanceof Node) {
		const domElem = initiator
		domElem.DOM = domElem.DOM || createDomProperties()
		return domElem
	}
	return dom(initiator).element
}

export const dom = (initiator) => {

	if (isDom(initiator)) return initiator
	
	let list = []
			
	if (isNode(initiator)) {
		list[0] = createDomElement(initiator)

	} else if (isString(initiator)) {
		list = makeSureItsAnArray(document.querySelectorAll(initiator))
			.map(createDomElement)

	} else if (isArrayLike(initiator)) {
		makeSureItsAnArray(initiator)
			.map(dom)
			.forEach(item => list.push(...item.list))
		
	} else if (isObject(initiator)) {
		list[0] = create(initiator)
	}

	return Object.create(getPrototype(), {
		list: { value: list, writable: false },
		element: { value: list[0], writable: false },
		initiator: { value: initiator, writable: false },
		exists: { value: (list.length > 0), writable: false },
	})
	
}

/*=======================================
Utility functions
=======================================*/

dom.isDom = isDom

dom.br = (n = 1) => dom([times({ br: [] }, n)])
dom.hr = (width = '95%') => dom({ hr: [], width })

dom.text = (txt) => dom(document.createTextNode(txt))

/*=======================================
Extending functionality
=======================================*/

dom.registerPlugin = (name, fn) => {
	getPrototype()[name] = runAndReturnFactory(fn)
}

dom.registerSetter = registerSetter

/*=======================================
Settings / setup
=======================================*/

dom.setEventbus = (eb) => getPrototype().eventbus = eb

dom.getEventbus = () => getPrototype().eventbus

// enforce singleton 
const gbl = globalThis || window || self || global || {} // node and browser compatible
if (!gbl.dom) {
	gbl.dom = dom
}