import { cva, VariantProps } from 'class-variance-authority';
import NextLink from 'next/link';
import React, { FC } from 'react';

export const link = cva(['flex items-center gap-12'], {
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
