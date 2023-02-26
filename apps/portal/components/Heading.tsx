import React, { FC } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const heading = tv({
	variants: {
		align: {
			left: ['text-left'],
			center: ['text-center'],
			right: ['text-right'],
		},
		size: {
			xs: ['text-16', 'leading-20'],
			sm: ['text-20', 'leading-28'],
			md: ['text-24', 'leading-32'],
			lg: ['text-32', 'leading-40'],
			xl: ['text-40', 'leading-48'],
			xxl: ['text-48', 'leading-56'],
		},
		weight: {
			200: ['font-200'],
			400: ['font-400'],
			600: ['font-600'],
			700: ['font-700'],
			800: ['font-800'],
			900: ['font-900'],
		},
	},
	defaultVariants: {
		align: 'left',
		size: 'xs',
		weight: 800,
	},
});

type HeadingVariants = VariantProps<typeof heading>;

interface TextProps extends HeadingVariants {
	children: React.ReactNode;
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading: FC<TextProps> = ({ as = 'h3', children, align, size, weight }) => {
	const Tag = as;
	return <Tag className={heading({ align, size, weight })}>{children}</Tag>;
};
