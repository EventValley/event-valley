import NextLink from 'next/link';
import React, { FC } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

export const link = tv({
	variants: {
		variant: {
			primary: [],
			secondary: [],
			ghost: ['font-600', 'hover:bg-gray-50', 'rounded-16'],
			inline: [],
		},
		size: {
			none: [],
			small: [],
			medium: ['text-16', 'leading-24', 'max-h-40', 'px-24', 'py-8'],
			large: [],
		},
		underline: {
			true: ['underline', 'hover:no-underline'],
		},
	},
	defaultVariants: {
		variant: 'inline',
	},
});

export interface LinkProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof link> {
	href: string;
	target?: '_blank' | '_self';
}

export const Link: FC<LinkProps> = ({ children, variant, size, underline, href, target = '_self' }) => {
	return (
		<NextLink className={link({ variant, size, underline })} href={href} target={target}>
			{children}
		</NextLink>
	);
};
