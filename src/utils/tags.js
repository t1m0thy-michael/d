import {
	CONST
} from './const'

// bitwise
// tag definitions
const HTML = CONST.TYPES.HTML
const SVG = CONST.TYPES.SVG
const EMPTY_HTML = CONST.TYPES.EMPTY_HTML

/**
 * Creates function that accepts domDefinition 
 * and sets ```prop1``` to itself or ```prop2```
 * 
 * @param {string} prop1 
 * @param {string} prop2 
 * @return {DomDefinition}
 */
const beforeCreateFactory = (prop1, prop2) => (d) => {
	d[prop1] = d[prop1] || d[prop2]
	return d
}

/**
 * t: type
 * beforeCreate: fn recieves domDefinition
 */
export const Tags = {
	a: {
		t: HTML | SVG
	},
	abbr: {
		t: HTML
	},
	address: {
		t: HTML
	},
	altGlyph: {
		t: SVG
	},
	altGlyphDef: {
		t: SVG
	},
	altGlyphItem: {
		t: SVG
	},
	animate: {
		t: SVG
	},
	animateColor: {
		t: SVG
	},
	animateMotion: {
		t: SVG
	},
	animateTransform: {
		t: SVG
	},
	area: {
		t: HTML
	},
	article: {
		t: HTML
	},
	aside: {
		t: HTML
	},
	audio: {
		t: HTML
	},
	b: {
		t: EMPTY_HTML
	},
	base: {
		t: HTML
	},
	bdi: {
		t: HTML
	},
	bdo: {
		t: HTML
	},
	blockquote: {
		t: HTML
	},
	br: {
		t: HTML
	},
	button: {
		t: HTML
	},
	canvas: {
		t: HTML
	},
	caption: {
		t: HTML
	},
	circle: {
		t: SVG
	},
	cite: {
		t: HTML
	},
	clipPath: {
		t: SVG
	},
	code: {
		t: HTML
	},
	col: {
		t: HTML
	},
	colgroup: {
		t: HTML
	},
	'color-profile': {
		t: SVG
	},
	cursor: {
		t: SVG
	},
	data: {
		t: HTML
	},
	datalist: {
		t: HTML
	},
	dd: {
		t: HTML
	},
	defs: {
		t: SVG
	},
	del: {
		t: HTML
	},
	desc: {
		t: SVG
	},
	details: {
		t: HTML
	},
	dfn: {
		t: HTML
	},
	dialog: {
		t: HTML
	},
	discard: {
		t: SVG
	},
	div: {
		t: HTML
	},
	dl: {
		t: HTML
	},
	dt: {
		t: HTML
	},
	ellipse: {
		t: SVG
	},
	em: {
		t: HTML
	},
	feBlend: {
		t: SVG
	},
	feColorMatrix: {
		t: SVG
	},
	feComponentTransfer: {
		t: SVG
	},
	feComposite: {
		t: SVG
	},
	feConvolveMatrix: {
		t: SVG
	},
	feDiffuseLighting: {
		t: SVG
	},
	feDisplacementMap: {
		t: SVG
	},
	feDistantLight: {
		t: SVG
	},
	feDropShadow: {
		t: SVG
	},
	feFlood: {
		t: SVG
	},
	feFuncA: {
		t: SVG
	},
	feFuncB: {
		t: SVG
	},
	feFuncG: {
		t: SVG
	},
	feFuncR: {
		t: SVG
	},
	feGaussianBlur: {
		t: SVG
	},
	feImage: {
		t: SVG
	},
	feMerge: {
		t: SVG
	},
	feMergeNode: {
		t: SVG
	},
	feMorphology: {
		t: SVG
	},
	feOffset: {
		t: SVG
	},
	fePointLight: {
		t: SVG
	},
	feSpecularLighting: {
		t: SVG
	},
	feSpotLight: {
		t: SVG
	},
	feTile: {
		t: SVG
	},
	feTurbulence: {
		t: SVG
	},
	fieldset: {
		t: HTML
	},
	figcaption: {
		t: HTML
	},
	figure: {
		t: HTML
	},
	filter: {
		t: SVG
	},
	font: {
		t: SVG
	},
	'font-face-format': {
		t: SVG
	},
	'font-face-src': {
		t: SVG
	},
	'font-face-uri': {
		t: SVG
	},
	'font-face': {
		t: SVG
	},
	'font-face-name': {
		t: SVG
	},
	footer: {
		t: HTML
	},
	foreignObject: {
		t: SVG
	},
	form: {
		t: HTML
	},
	g: {
		t: SVG
	},
	glyph: {
		t: SVG
	},
	glyphRef: {
		t: SVG
	},
	h1: {
		t: HTML
	},
	h2: {
		t: HTML
	},
	h3: {
		t: HTML
	},
	h4: {
		t: HTML
	},
	h5: {
		t: HTML
	},
	h6: {
		t: HTML
	},
	hatch: {
		t: SVG
	},
	hatchpath: {
		t: SVG
	},
	head: {
		t: HTML
	},
	header: {
		t: HTML
	},
	hgroup: {
		t: HTML
	},
	hkern: {
		t: SVG
	},
	hr: {
		t: EMPTY_HTML
	},
	i: {
		t: HTML
	},
	iframe: {
		t: HTML,
		beforeCreate: beforeCreateFactory('src', 'frame')
	},
	image: {
		t: SVG
	},
	img: {
		t: HTML,
		beforeCreate: beforeCreateFactory('src', 'img')
	},
	input: {
		t: HTML,
		beforeCreate: beforeCreateFactory('value', 'input')
	},
	ins: {
		t: HTML
	},
	kbd: {
		t: HTML
	},
	label: {
		t: HTML
	},
	legend: {
		t: HTML
	},
	li: {
		t: HTML
	},
	line: {
		t: SVG
	},
	linearGradient: {
		t: SVG
	},
	link: {
		t: HTML
	},
	main: {
		t: HTML
	},
	map: {
		t: HTML
	},
	mark: {
		t: HTML
	},
	marker: {
		t: SVG
	},
	mask: {
		t: SVG
	},
	menu: {
		t: HTML
	},
	menuitem: {
		t: HTML
	},
	mesh: {
		t: SVG
	},
	meshgradient: {
		t: SVG
	},
	meta: {
		t: HTML
	},
	metadata: {
		t: SVG
	},
	meter: {
		t: HTML
	},
	'missing-glyph': {
		t: SVG
	},
	mpath: {
		t: SVG
	},
	nav: {
		t: HTML
	},
	ol: {
		t: HTML
	},
	optgroup: {
		t: HTML
	},
	option: {
		t: HTML
	},
	output: {
		t: HTML
	},
	p: {
		t: HTML
	},
	path: {
		t: SVG
	},
	pattern: {
		t: SVG
	},
	picture: {
		t: HTML
	},
	polygon: {
		t: SVG
	},
	polyline: {
		t: SVG
	},
	pre: {
		t: HTML
	},
	progress: {
		t: HTML
	},
	q: {
		t: HTML
	},
	radialGradient: {
		t: SVG
	},
	rb: {
		t: HTML
	},
	rect: {
		t: SVG
	},
	rp: {
		t: HTML
	},
	rt: {
		t: HTML
	},
	rtc: {
		t: HTML
	},
	ruby: {
		t: HTML
	},
	s: {
		t: HTML
	},
	samp: {
		t: HTML
	},
	script: {
		t: HTML | SVG,
		beforeCreate: beforeCreateFactory('src', 'script')
	},
	select: {
		t: HTML,
		beforeCreate: beforeCreateFactory('options', 'select')
	},
	selection: {
		t: HTML
	},
	set: {
		t: SVG
	},
	small: {
		t: HTML
	},
	solidcolor: {
		t: SVG
	},
	span: {
		t: HTML
	},
	stop: {
		t: SVG
	},
	strong: {
		t: HTML
	},
	style: {
		t: HTML
	},
	style: {
		t: SVG
	},
	sub: {
		t: HTML
	},
	summary: {
		t: HTML
	},
	sup: {
		t: HTML
	},
	svg: {
		t: SVG,
		beforeCreate: (d) => {
			d.namespace = d.namespace || CONST.NAMESPACE_SVG
			return d
		}
	},
	switch: {
		t: SVG
	},
	symbol: {
		t: SVG
	},
	table: {
		t: HTML
	},
	tbody: {
		t: HTML
	},
	td: {
		t: HTML
	},
	text: {
		t: SVG
	},
	textarea: {
		t: HTML
	},
	textPath: {
		t: SVG
	},
	tfoot: {
		t: HTML
	},
	th: {
		t: HTML
	},
	thead: {
		t: HTML
	},
	title: {
		t: HTML
	},
	title: {
		t: SVG
	},
	tr: {
		t: HTML
	},
	track: {
		t: HTML
	},
	tref: {
		t: SVG
	},
	tspan: {
		t: SVG
	},
	tt: {
		t: HTML
	},
	u: {
		t: HTML
	},
	ul: {
		t: HTML
	},
	use: {
		t: SVG
	},
	var: {
		t: HTML
	},
	video: {
		t: HTML
	},
	view: {
		t: SVG
	},
	vkern: {
		t: SVG
	},
	wbr: {
		t: HTML
	},
}