import { FC } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const text = tv({
	variants: {
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
});

type TextVariants = VariantProps<typeof text>;

interface TextProps extends TextVariants {
	children: React.ReactNode;
	as?: 'p' | 'span';
}

export const Text: FC<TextProps> = ({ as = 'p', children, size, weight }) => {
	const Tag = as;
	return <Tag className={text({ size, weight })}>{children}</Tag>;
};
