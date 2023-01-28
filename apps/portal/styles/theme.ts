import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000',
			white: '#fff',
			gray50: '#f5f5f5',
			gray100: '#f0f0f0',
			gray200: '#d8d8d8',
			gray300: '#c0c0c0',
			gray400: '#a8a8a8',
			gray500: '#909090',
			gray600: '#787878',
			gray700: '#606060',
			gray800: '#484848',
			gray900: '#303030',
			gray925: '#282828',
			gray930: '#222222',
			gray950: '#1e1e1e',
			gray1000: '#181818',
		},
		space: {
			0: '0',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px',
			12: '12px',
			16: '16px',
			20: '20px',
			24: '24px',
			28: '28px',
			32: '32px',
			36: '36px',
			40: '40px',
			44: '44px',
			48: '48px',
			52: '52px',
			56: '56px',
			64: '64px',
			96: '96px',
			120: '120px',
			144: '144px',
			168: '168px',
			192: '192px',
		},
		fontSizes: {
			12: '12px',
			14: '14px',
			16: '16px',
			18: '18px',
			20: '20px',
			24: '24px',
			28: '28px',
			32: '32px',
			36: '36px',
			40: '40px',
			44: '44px',
			48: '48px',
		},
		fontWeights: {
			100: '100',
			200: '200',
			300: '300',
			400: '400',
			500: '500',
			600: '600',
			700: '700',
			800: '800',
			900: '900',
		},
		lineHeights: {
			1: '1',
			16: '16px',
			20: '20px',
			24: '24px',
			28: '28px',
			32: '32px',
			36: '36px',
			40: '40px',
			44: '44px',
			48: '48px',
			52: '52px',
			56: '56px',
			60: '60px',
			64: '64px',
		},
	},
	media: {
		bp1: '(min-width: 480px)',
		xs: '(min-width: 480px)',
		sm: '(min-width: 640px)',
		md: '(min-width: 768px)',
		lg: '(min-width: 1024px)',
		xl: '(min-width: 1280px)',
		'2xl': '(min-width: 1560px)',
		'3xl': '(min-width: 1920px)',
	},
	/* utils: {
		marginX: (value) => ({ marginLeft: value, marginRight: value }),
	},*/
});