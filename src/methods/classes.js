import {
	makeSureItsAnArray
} from '@t1m0thy_michael/u'

import {
	runFactory,
	runAndReturnFactory
} from '../utils/run'

export const addClass = (element, className) => {
	if (!element.classList) return
	element.classList.add(...makeSureItsAnArray(className))
}

export const removeClass = (element, className) => {
	if (!element.classList) return 
	element.classList.remove(...makeSureItsAnArray(className))
}

export const replaceClass = (element, oldClass, newClass) => {
	if (!element.classList) return 
	element.classList.replace(oldClass, newClass)
}

export const toggleClass = (element, className) => {
	if (!element.classList) return
	element.classList.toggle(className)
}

export const hasClass = (element, className) => {
	if (!element.classList) return false
	return element.classList.contains(className)
}

export const classes = {
	addClass: runFactory(addClass),
	hasClass: runAndReturnFactory(hasClass),
	removeClass: runFactory(removeClass),
	replaceClass: runFactory(replaceClass),
	toggleClass: runFactory(toggleClass),
}

export default classes