module.exports = {
	src: ['css/main.css'],
	options: {
		// Be careful when using !important declaration
		"important": 2,
		// Don't use adjoining classes.
		"adjoining-classes": 2,
		// Properties should be known (listed in CSS3 specification) or be a vendor-prefixed property.
		"known-properties": 2,
		// The box-sizing properties isn't supported in IE6 and IE7.
		"box-sizing": false,
		// Don't use width or height when using padding or border.
		"box-model": 2,
		// Don't use classes or IDs with elements (a.foo or a#foo).
		"overqualified-elements": 2,
		// Certain properties shouldn't be used with certain display property values.
		"display-property-grouping": 2,
		// Use the bulletproof @font-face syntax to avoid 404's in
		// old IE (http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax).
		"bulletproof-font-face": 2,
		// Include all compatible vendor prefixes to reach a wider range of users.
		"compatible-vendor-prefixes": 2,
		// Selectors that look like regular expressions are slow and should be avoided.
		"regex-selectors": 2,
		// This rule looks for recoverable syntax errors.
		"errors": 2,
		// Every background-image should be unique. Use a common class for e.g. sprites.
		"duplicate-background-images": 2,
		// Duplicate properties must appear one after the other.
		"duplicate-properties": 2,
		// Rules without any properties specified should be removed.
		"empty-rules": 2,
		// Will warn when selector count is >= 3800 selectors.
		"selector-max-approaching": 2,
		// When using a vendor-prefixed gradient, make sure to use them all.
		"gradients": 2,
		// For older browsers that don't support RGBA, HSL, or HSLA, provide a fallback color.
		"fallback-colors": 2,
		// Checks the number of font-size declarations.
		"font-sizes": 2,
		// Too many different web fonts in the same stylesheet.
		"font-faces": 2,
		// This rule tests if the float property is used too many times
		"floats": 2,
		// Checks for the star property hack (targets IE6/7)
		"star-property-hack": 2,
		// Use of outline: none or outline: 0 should be limited to :focus rules.
		"outline-none": 2,
		// Don't use @import, use <link> instead.
		"import": 2,
		// Selectors should not contain IDs.
		"ids": 2,
		// Checks for the underscore property hack (targets IE6)
		"underscore-property-hack": 2,
		// Track how many rules there are.
		"rules-count": 2,
		// Headings should not be qualified (namespaced).
		"qualified-headings": 2,
		// Will error when selector count is > 4095.
		"selector-max": 2,
		// Use shorthand properties where possible.
		"shorthand": 2,
		// Checks for text indent less than -99px
		"text-indent": 2,
		// Headings should be defined only once.
		"unique-headings": 2,
		// The universal selector (*) is known to be slow.
		"universal-selector": false,
		// Unqualified attribute selectors are known to be slow.
		"unqualified-attributes": 2,
		// When using a vendor-prefixed property, make sure to include the standard one.
		"vendor-prefix": 2,
		// You don't need to specify units when a value is 0.
		"zero-units": 2
	}
}