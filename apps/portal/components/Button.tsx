import React, { FC } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

export const button = tv(
	{
		base: [
			'appearance-none',
			'flex',
			'cursor-pointer',
			'items-center',
			'gap-12',
			'transition-all',
			'text-center',
		],
		variants: {
			variant: {
				primary: ['bg-gray-1000', 'hover:shadow-md', 'rounded-16', 'text-white'],
				secondary: ['hover:bg-gray-200', 'rounded-12'],
				ghost: ['hover:bg-gray-200', 'rounded-16'],
				inline: [''],
			},
			size: {
				none: ['text-14', 'p-0'],
				small: ['text-14', 'font-600', 'px-16', 'py-8'],
				medium: ['text-14', 'font-600', 'px-36', 'py-12'],
				large: '',
			},
			align: {
				left: ['justify-start'],
				center: ['justify-center'],
				right: ['justify-end'],
			},
			state: {
				default: ['opacity-100'],
				active: ['opacity-100'],
			},
		},
		defaultVariants: {
			align: 'left',
		},
	},
	{ twMerge: false }
);

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}

export const Button: FC<ButtonProps> = ({
	align,
	variant = 'primary',
	size = 'medium',
	state = 'default',
	...props
}) => {
	return <button className={`${button({ align, variant, size, state })}`} {...props} />;
};
