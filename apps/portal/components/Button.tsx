import { type VariantProps, cva } from 'class-variance-authority';
import React, { FC } from 'react';

export const button = cva(
	['appearance-none', 'flex', 'cursor-pointer', 'items-center', 'gap-12', 'transition-all'],
	{
		variants: {
			variant: {
				primary: ['bg-gray-1000', 'hover:bg-gray-800', 'text-gray-50', 'rounded-16'],
				secondary: [''],
				ghost: ['hover:bg-gray-200', 'rounded-16'],
				inline: [''],
			},
			size: {
				none: ['text-16', 'p-0'],
				small: ['text-16', 'font-600', 'px-16', 'py-8'],
				medium: ['text-16', 'font-600', 'px-36', 'py-12'],
				large: '',
			},
			state: {
				default: ['opacity-100'],
				active: ['opacity-100'],
			},
		},
	}
);

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}

export const Button: FC<ButtonProps> = ({
	variant = 'primary',
	size = 'medium',
	state = 'default',
	...props
}) => {
	return <button className={button({ variant, size, state })} {...props} />;
};
