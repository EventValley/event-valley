import React, { FC } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const stock = tv({
	base: [''],
	variants: {
		direction: {
			horizontal: ['flex', 'flex-row'],
			vertical: ['flex', 'flex-col'],
		},
	},
});

export interface StackProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof stock> {
	as?: 'div' | 'section' | 'header' | 'main' | 'aside' | 'span' | 'nav' | 'ul' | 'ol' | 'li';
	className?: string;
	children: React.ReactNode;
}

export const Stack: FC<StackProps> = ({ as = 'div', direction, className, children }) => {
	const Component = as;

	return (
		<Component className={`${stock({ direction })} ${className ? className : ''}`}>{children}</Component>
	);
};
