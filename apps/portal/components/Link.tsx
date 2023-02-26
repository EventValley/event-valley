import NextLink from 'next/link';
import React, { FC } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

export const link = tv({
	variants: {
		variant: {
			primary: [],
			secondary: [],
			ghost: ['font-600', 'hover:bg-gray-50', 'rounded-16'],
			inline: ['underline', 'hover:no-underline'],
		},
		size: {
			none: [],
			small: [],
			medium: ['text-16', 'leading-24', 'max-h-40', 'px-24', 'py-8'],
			large: [],
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

export const Link: FC<LinkProps> = ({ children, variant, size, href, target = '_self' }) => {
	return (
		<NextLink className={link({ variant, size })} href={href} target={target}>
			{children}
		</NextLink>
	);
};
