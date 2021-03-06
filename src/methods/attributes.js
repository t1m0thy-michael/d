import { get, set, isUndefined, isObject } from '@t1m0thy_michael/u'
import {
	runFactory,
	runAndReturnFactory,
} from '../utils/run'
import { DOM_WONT_SET } from '../utils/errors'

export const attr = (element, keyOrObj, val) => {

	if (!element.setAttribute) return null

	if (isObject(keyOrObj)) {
		const obj = keyOrObj
		for (let k in obj) {
			element.setAttribute(k, obj[k])
		}

	} else {
		const key = keyOrObj
		if (isUndefined(val)) {
			const rtn = element.getAttribute(key)
			return isUndefined(rtn) ? null : rtn
		}
		element.setAttribute(key, val)
	}
}

export const data = (element, keyOrObj, val) => {

	if (isObject(keyOrObj)) {
		const obj = keyOrObj
		for (let k in obj) {
			element.DOM.data.set(k, obj[k])
		}
		
	} else {
		const key = keyOrObj
		if (isUndefined(val)) {
			const rtn = element.DOM.data.get(key)
			return isUndefined(rtn) ? null : rtn
		}
		element.DOM.data.set(key, val)

	}
}

export const disable = (element) => element.disabled = true

export const enable = (element) => element.disabled = false

export const id = (element, val) => {
	if (!val) return element.id || null
	if (val.substring(0, 1) === '#') val = val.substring(1)
	if (document.querySelectorAll(`#${val}`).length) {
		throw new DOM_WONT_SET(`ID [${val}] already exists in document.`)
	}
	element.id = val
}

export const innerHTML = (element, html, append) => {
	if (isUndefined(html)) return element.innerHTML || ''
	if (append) return element.innerHTML += html
	element.innerHTML = html
}

export const innerText = (element, text, append) => {
	if (isUndefined(text)) return element.innerText || ''
	if (append) return element.innerText += text
	element.innerText = text
}

export const attribute = {
	attr: runAndReturnFactory(attr),
	data: runAndReturnFactory(data),
	disable: runFactory(disable),
	enable: runFactory(enable),
	id: runAndReturnFactory(id),
	innerHTML: runAndReturnFactory(innerHTML),
	innerText: runAndReturnFactory(innerText),
}

export default attribute