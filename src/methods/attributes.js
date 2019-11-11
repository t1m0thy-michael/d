import { get, set, isUndefined } from '@t1m0thy_michael/u'

import { runFactory, runAndReturnFactory } from '../utils/run'
import { Dom_Element_Definition_Error } from '../utils/errors'

export const attr = (element, attr, val) => {
	if (!element.getAttribute || !element.setAttribute) return false
	if (isUndefined(val)) return element.getAttribute(attr) || false
	element.setAttribute(attr, String(val))
}

export const data = (element, key, val) => {
	if (isUndefined(val)) return get(element, ['DOM', 'data', key]) || false
	set(element, ['DOM', 'data', key], val)
	return val
}
export const disable = (element) => element.disabled = true

export const enable = (element) => element.disabled = false

export const id = (element, val) => {
	if (!val) return element.id || false
	val = val.replace('#', '')
	if (document.querySelectorAll(`#${val}`).length) {
		throw new Dom_Element_Definition_Error(`ID [${val}] already exists in document.`)
	}
	element.id = val
}

export const innerHTML = (element, html, append) => {
	if (isUndefined(html)) return element.innerHTML || ''
	if (append) return element.innerText += html
	return element.innerHTML = html
}

export const innerText = (element, text, append) => {
	if (isUndefined(text)) return element.innerText || ''
	if (append) return element.innerText += text
	return element.innerText = text
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