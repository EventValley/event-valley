import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const input = tv(
	{
		base: ['text-14', 'w-full', 'appearance-none'],
		variants: {
			size: {
				md: [
					'bg-transparent',
					'rounded-16',
					'border',
					'border-gray-400',
					'px-16',
					'py-8',
					'text-14',
					'font-400',
					'h-40',
				],
				lg: [''],
			},
			error: {
				true: ['border-red-1000', 'text-red-1000'],
			},
		},
		defaultVariants: {
			size: 'md',
		},
	},
	{ twMerge: false }
);

export interface InputProps extends VariantProps<typeof input> {
	id?: string;
	className?: string;
	name?: string;
	type?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
	const { size, error, className, ...rest } = props;

	return (
		<div className="w-full">
			<input className={`${input({ size, error })} ${className ? className : ''}`} {...rest} ref={ref} />
		</div>
	);
});
