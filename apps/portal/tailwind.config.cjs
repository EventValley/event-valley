/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [
		"./components/**/*.{html,tsx,ts}",
		"./pages/**/*.{html,tsx,ts}"
	],
	darkMode: "media",
	theme: {
		accentColor: ({ theme }) => ({
			...theme("colors"),
			auto: "auto"
		}),
		aspectRatio: {
			auto: "auto",
			square: "1 / 1",
			video: "16 / 9",
			imageSm: "9 / 5",
			imageMd: "9 / 6",
			imageLg: "4 / 3"
		},
		backdropBlur: ({ theme }) => theme("blur"),
		backdropBrightness: ({ theme }) => theme("brightness"),
		backdropContrast: ({ theme }) => theme("contrast"),
		backdropGrayscale: ({ theme }) => theme("grayscale"),
		backdropHueRotate: ({ theme }) => theme("hueRotate"),
		backdropInvert: ({ theme }) => theme("invert"),
		backdropOpacity: ({ theme }) => theme("opacity"),
		backdropSaturate: ({ theme }) => theme("saturate"),
		backdropSepia: ({ theme }) => theme("sepia"),
		backgroundColor: ({ theme }) => ({
			...theme("colors"),
			"btn-secondary": "rgba(42,42,42,100)",
			"btn-secondary-hover": "rgba(50,50,50,100)"
		}),
		backgroundImage: {},
		backgroundOpacity: ({ theme }) => theme("opacity"),
		backgroundPosition: {
			bottom: "bottom",
			center: "center",
			left: "left",
			"left-bottom": "left bottom",
			"left-top": "left top",
			right: "right",
			"right-bottom": "right bottom",
			"right-top": "right top",
			top: "top"
		},
		backgroundSize: {
			auto: "auto",
			cover: "cover",
			contain: "contain"
		},
		blur: {
			DEFAULT: "12px"
		},
		borderColor: ({ theme }) => ({
			...theme("colors")
		}),
		borderOpacity: ({ theme }) => theme("opacity"),
		borderRadius: {
			2: "2px",
			4: "4px",
			8: "8px",
			12: "12px",
			14: "14px",
			16: "16px",
			24: "24px",
			full: "100%"
		},
		borderSpacing: ({ theme }) => ({
			...theme("spacing")
		}),
		borderWidth: {
			DEFAULT: "1px"
		},
		boxShadow: {},
		boxShadowColor: ({ theme }) => theme("colors"),
		brightness: {},
		caretColor: ({ theme }) => theme("colors"),
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: "#000",
			white: "#fff",
			gray: {
				50: "#f5f5f5",
				100: "#f0f0f0",
				200: "#d8d8d8",
				300: "#c0c0c0",
				400: "#a8a8a8",
				500: "#909090",
				600: "#787878",
				700: "#606060",
				800: "#484848",
				900: "#303030",
				925: "#282828",
				930: "#222222",
				950: "#1e1e1e",
				1000: "#181818"
			},
			translucent: {
				gray: {
					900: "rgba(36,36,36,0.8)",
					1000: "rgba(24,24,24,0.9)",
				},
				white: {
					900: "rgba(240,240,240,0.9)",
					1000: "rgba(255,255,255,0.9)"
				}
			}
		},
		columns: {},
		container: {},
		contrast: {
			0: '0',
			50: '.5',
			75: '.75',
			100: '1',
			125: '1.25',
			150: '1.5',
			200: '2',
		},
		cursor: {
			auto: 'auto',
			default: 'default',
			pointer: 'pointer',
			wait: 'wait',
			text: 'text',
			move: 'move',
			help: 'help',
			'not-allowed': 'not-allowed',
			none: 'none',
			'context-menu': 'context-menu',
			progress: 'progress',
			cell: 'cell',
			crosshair: 'crosshair',
			'vertical-text': 'vertical-text',
			alias: 'alias',
			copy: 'copy',
			'no-drop': 'no-drop',
			grab: 'grab',
			grabbing: 'grabbing',
			'all-scroll': 'all-scroll',
			'col-resize': 'col-resize',
			'row-resize': 'row-resize',
			'n-resize': 'n-resize',
			'e-resize': 'e-resize',
			's-resize': 's-resize',
			'w-resize': 'w-resize',
			'ne-resize': 'ne-resize',
			'nw-resize': 'nw-resize',
			'se-resize': 'se-resize',
			'sw-resize': 'sw-resize',
			'ew-resize': 'ew-resize',
			'ns-resize': 'ns-resize',
			'nesw-resize': 'nesw-resize',
			'nwse-resize': 'nwse-resize',
			'zoom-in': 'zoom-in',
			'zoom-out': 'zoom-out',
		},
		divideColor: ({ theme }) => theme("borderColor"),
		divideOpacity: ({ theme }) => theme("borderOpacity"),
		divideWidth: ({ theme }) => theme("borderWidth"),
		dropShadow: {},
		fill: ({ theme }) => ({
			...theme("colors"),
			none: "none"
		}),
		flex: {
			1: "1 1 0%",
			auto: "1 1 auto",
			initial: "0 1 auto",
			none: "none"
		},
		flexBasis: ({ theme }) => ({
			...theme("spacing")
		}),
		flexGrow: {
			DEFAULT: "1",
			0: "0"
		},
		flexShrink: {
			DEFAULT: "1",
			0: "0"
		},
		fontFamily: {},
		fontSize: {
			12: "12px",
			14: "14px",
			16: "16px",
			18: "18px",
			20: "20px",
			24: "24px",
			28: "28px",
			32: "32px",
			36: "36px",
			40: "40px",
			44: "44px",
			48: "48px",
			52: "52px",
			56: "56px",
			72: "72px",
			96: "96px",
			120: "120px"
		},
		fontWeight: {
			100: "100",
			200: "200",
			300: "300",
			400: "400",
			500: "500",
			600: "600",
			700: "700",
			800: "800",
			900: "900"
		},
		gap: ({ theme }) => ({
			...theme("spacing")
		}),
		gradientColorStops: ({ theme }) => theme("colors"),
		grayscale: {
			DEFAULT: "100%",
			0: "0"
		},
		gridAutoColumns: {
			auto: "auto",
			min: "min-content",
			max: "max-content",
			fr: "minmax(0, 1fr)"
		},
		gridAutoRows: {
			auto: "auto",
			min: "min-content",
			max: "max-content",
			fr: "minmax(0, 1fr)"
		},
		gridColumn: {
			auto: "auto",
			"span-1": "span 1 / span 1",
			"span-2": "span 2 / span 2",
			"span-3": "span 3 / span 3",
			"span-4": "span 4 / span 4",
			"span-5": "span 5 / span 5",
			"span-6": "span 6 / span 6",
			"span-7": "span 7 / span 7",
			"span-8": "span 8 / span 8",
			"span-9": "span 9 / span 9",
			"span-10": "span 10 / span 10",
			"span-11": "span 11 / span 11",
			"span-12": "span 12 / span 12",
			"span-full": "1 / -1"
		},
		gridColumnEnd: {
			auto: "auto",
			1: "1",
			2: "2",
			3: "3",
			4: "4",
			5: "5",
			6: "6",
			7: "7",
			8: "8",
			9: "9",
			10: "10",
			11: "11",
			12: "12"
		},
		gridColumnStart: {
			auto: "auto",
			1: "1",
			2: "2",
			3: "3",
			4: "4",
			5: "5",
			6: "6",
			7: "7",
			8: "8",
			9: "9",
			10: "10",
			11: "11",
			12: "12"
		},
		gridRow: {
			auto: "auto",
			"span-1": "span 1 / span 1",
			"span-2": "span 2 / span 2",
			"span-3": "span 3 / span 3",
			"span-4": "span 4 / span 4",
			"span-5": "span 5 / span 5",
			"span-6": "span 6 / span 6",
			"span-full": "1 / -1"
		},
		gridRowEnd: {
			auto: "auto",
			1: "1",
			2: "2",
			3: "3",
			4: "4",
			5: "5",
			6: "6",
			7: "7"
		},
		gridRowStart: {
			auto: "auto",
			1: "1",
			2: "2",
			3: "3",
			4: "4",
			5: "5",
			6: "6",
			7: "7"
		},
		gridTemplateColumns: {
			none: "none",
			header: "48ox 1fr",
			main: '25% 50% 25%',
			1: "repeat(1, minmax(0, 1fr))",
			2: "repeat(2, minmax(0, 1fr))",
			3: "repeat(3, minmax(0, 1fr))",
			4: "repeat(4, minmax(0, 1fr))",
			5: "repeat(5, minmax(0, 1fr))",
			6: "repeat(6, minmax(0, 1fr))",
			7: "repeat(7, minmax(0, 1fr))",
			8: "repeat(8, minmax(0, 1fr))",
			9: "repeat(9, minmax(0, 1fr))",
			10: "repeat(10, minmax(0, 1fr))",
			11: "repeat(11, minmax(0, 1fr))",
			12: "repeat(12, minmax(0, 1fr))"
		},
		gridTemplateRows: {
			none: "none",
			1: "repeat(1, minmax(0, 1fr))",
			2: "repeat(2, minmax(0, 1fr))",
			3: "repeat(3, minmax(0, 1fr))",
			4: "repeat(4, minmax(0, 1fr))",
			5: "repeat(5, minmax(0, 1fr))",
			6: "repeat(6, minmax(0, 1fr))"
		},
		height: ({ theme }) => ({
			...theme("spacing"),
			"1/2": "50%",
			"1/3": "33.333333%",
			"2/3": "66.666667%",
			"1/4": "25%",
			"2/4": "50%",
			"3/4": "75%",
			"1/5": "20%",
			"2/5": "40%",
			"3/5": "60%",
			"4/5": "80%",
			"1/6": "16.666667%",
			"2/6": "33.333333%",
			"3/6": "50%",
			"4/6": "66.666667%",
			"5/6": "83.333333%",
			full: "100%",
			screen: "100vh",
			min: "min-content",
			max: "max-content",
			fit: "fit-content"
		}),
		hueRotate: {},
		inset: ({ theme }) => ({
			...theme("spacing"),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			full: '100%',
		}),
		invert: {
			DEFAULT: "100%",
			0: "0"
		},
		animation: {
			'fade-in': 'fade-in .15s forwards'
		},
		keyframes: {
			'fade-in': {
				'0%': { opacity: 0 },
				'100%': { opacity: 1 },
			}
		},
		letterSpacing: {},
		lineHeight: {
			1: "1",
			16: "16px",
			20: "20px",
			24: "24px",
			28: "28px",
			32: "32px",
			36: "36px",
			40: "40px",
			44: "44px",
			48: "48px",
			52: "52px",
			56: "56px",
			60: "60px",
			64: "64px"
		},
		listStyleType: {
			none: "none",
			disc: "disc",
			decimal: "decimal"
		},
		margin: ({ theme }) => ({
			auto: "auto",
			...theme("spacing")
		}),
		maxHeight: ({ theme }) => ({
			...theme("spacing"),
			full: "100%",
			screen: "100vh",
			min: "min-content",
			max: "max-content",
			fit: "fit-content"
		}),
		maxWidth: ({ theme, breakpoints }) => ({
			...breakpoints(theme("screens")),
			480: "480px",
			1960: "1960px"
		}),
		minHeight: {
			0: "0px",
			680: "680px",
			full: "100%",
			screen: "100vh",
			min: "min-content",
			max: "max-content",
			fit: "fit-content"
		},
		minWidth: {
			0: "0px",
			full: "100%",
			min: "min-content",
			max: "max-content",
			fit: "fit-content"
		},
		objectPosition: {
			bottom: "bottom",
			center: "center",
			left: "left",
			"left-bottom": "left bottom",
			"left-top": "left top",
			right: "right",
			"right-bottom": "right bottom",
			"right-top": "right top",
			top: "top"
		},
		opacity: {
			0: "0",
			5: "0.05",
			10: "0.1",
			20: "0.2",
			25: "0.25",
			30: "0.3",
			40: "0.4",
			50: "0.5",
			60: "0.6",
			70: "0.7",
			75: "0.75",
			80: "0.8",
			90: "0.9",
			95: "0.95",
			100: "1"
		},
		order: {
			first: "-9999",
			last: "9999",
			none: "0",
			1: "1",
			2: "2",
			3: "3",
			4: "4",
			5: "5",
			6: "6",
			7: "7",
			8: "8",
			9: "9",
			10: "10",
			11: "11",
			12: "12"
		},
		outlineColor: ({ theme }) => theme("colors"),
		outlineOffset: {},
		outlineWidth: {},
		padding: ({ theme }) => theme("spacing"),
		placeholderColor: ({ theme }) => theme("colors"),
		placeholderOpacity: ({ theme }) => theme("opacity"),
		ringColor: ({ theme }) => ({
			...theme("colors")
		}),
		ringOffsetColor: ({ theme }) => theme("colors"),
		ringOffsetWidth: {},
		ringOpacity: ({ theme }) => ({
			DEFAULT: "0.5",
			...theme("opacity")
		}),
		ringWidth: {},
		rotate: {
			0: "0deg",
			1: "1deg",
			2: "2deg",
			3: "3deg",
			6: "6deg",
			12: "12deg",
			45: "45deg",
			90: "90deg",
			180: "180deg"
		},
		saturate: {},
		scale: {
			0: "0",
			50: ".5",
			75: ".75",
			90: ".9",
			95: ".95",
			100: "1",
			105: "1.05",
			110: "1.1",
			125: "1.25",
			150: "1.5"
		},
		screens: {
			xs: "480px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1560px",
			"3xl": "1920px"
		},
		scrollMargin: ({ theme }) => ({
			...theme("spacing")
		}),
		scrollPadding: ({ theme }) => ({
			...theme("spacing")
		}),
		sepia: {},
		skew: {},
		space: ({ theme }) => ({
			...theme("spacing")
		}),
		spacing: {
			0: "0",
			1: "1px",
			2: "2px",
			4: "4px",
			8: "8px",
			12: "12px",
			16: "16px",
			20: "20px",
			24: "24px",
			28: "28px",
			32: "32px",
			36: "36px",
			40: "40px",
			44: "44px",
			48: "48px",
			52: "52px",
			56: "56px",
			64: "64px",
			96: "96px",
			120: "120px",
			144: "144px",
			168: "168px",
			192: "192px"
		},
		stroke: ({ theme }) => ({
			none: "none",
			...theme("colors")
		}),
		strokeWidth: {
			0: "0",
			1: "1",
			2: "2"
		},
		supports: {},
		data: {},
		textColor: ({ theme }) => theme("colors"),
		textDecorationColor: ({ theme }) => theme("colors"),
		textDecorationThickness: {
			auto: "auto",
			"from-font": "from-font",
			0: "0px",
			1: "1px",
			2: "2px",
			4: "4px",
			8: "8px"
		},
		textIndent: ({ theme }) => ({
			...theme("spacing")
		}),
		textOpacity: ({ theme }) => theme("opacity"),
		textUnderlineOffset: {},
		transformOrigin: {},
		transitionDelay: {},
		transitionDuration: {
			DEFAULT: "250ms",
			75: "75ms",
			100: "100ms",
			150: "150ms",
			200: "200ms",
			300: "300ms",
			500: "500ms",
			700: "700ms",
			1000: "1000ms"
		},
		transitionProperty: {
			none: 'none',
			all: 'all',
			DEFAULT:
				'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
			colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
			opacity: 'opacity',
			shadow: 'box-shadow',
			transform: 'transform',
		},
		transitionTimingFunction: {},
		translate: ({ theme }) => ({
			...theme("spacing"),
			"1/2": "50%",
			"1/3": "33.333333%",
			"2/3": "66.666667%",
			"1/4": "25%",
			"2/4": "50%",
			"3/4": "75%",
			full: "100%"
		}),
		width: ({ theme }) => ({
			...theme("spacing"),
			"1/2": "50%",
			"1/3": "33.333333%",
			"2/3": "66.666667%",
			"1/4": "25%",
			"2/4": "50%",
			"3/4": "75%",
			"1/5": "20%",
			"2/5": "40%",
			"3/5": "60%",
			"4/5": "80%",
			"1/6": "16.666667%",
			"2/6": "33.333333%",
			"3/6": "50%",
			"4/6": "66.666667%",
			"5/6": "83.333333%",
			"1/12": "8.333333%",
			"2/12": "16.666667%",
			"3/12": "25%",
			"4/12": "33.333333%",
			"5/12": "41.666667%",
			"6/12": "50%",
			"7/12": "58.333333%",
			"8/12": "66.666667%",
			"9/12": "75%",
			"10/12": "83.333333%",
			"11/12": "91.666667%",
			full: "100%",
			screen: "100vw",
			min: "min-content",
			max: "max-content",
			fit: "fit-content"
		}),
		willChange: {
			auto: "auto",
			scroll: "scroll-position",
			contents: "contents",
			transform: "transform"
		},
		zIndex: {
			auto: "auto",
			0: "0",
			10: "10",
			20: "20",
			30: "30",
			40: "40",
			50: "50",
			100: "100"
		}
	},
	plugins: []
};
