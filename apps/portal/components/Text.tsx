import React, { FC } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const text = tv({
	variants: {
		align: {
			left: ['text-left'],
			center: ['text-center'],
			right: ['text-right'],
		},
		size: {
			xs: ['text-12', 'leading-16'],
			sm: ['text-14', 'leading-16'],
			md: ['text-16', 'leading-20'],
			lg: ['text-18', 'leading-24'],
			xl: ['text-20', 'leading-28'],
			xxl: ['text-24', 'leading-32'],
		},
		weight: {
			200: ['font-200'],
			400: ['font-400'],
			600: ['font-600'],
			700: ['font-700'],
		},
	},
	defaultVariants: {
		align: 'left',
	},
});

type TextVariants = VariantProps<typeof text>;

interface TextProps extends TextVariants {
	className?: string;
	children: React.ReactNode;
	as?: 'p' | 'span';
}

export const Text: FC<TextProps> = ({ as = 'p', className, children, align, size, weight }) => {
	const Tag = as;
	return <Tag className={`${text({ align, size, weight })} ${className ? className : ''}`}>{children}</Tag>;
};
