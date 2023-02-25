import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const input = tv({
	base: ['w-full', 'appearance-none'],
	variants: {
		size: {
			md: [
				'bg-transparent',
				'rounded-16',
				'border',
				'border-gray-400',
				'px-16',
				'py-8',
				'text-16',
				'font-400',
				'h-40',
			],
			lg: [''],
		},
	},
	defaultVariants: {
		size: 'md',
	},
});

export interface InputProps extends VariantProps<typeof input> {
	id?: string;
	name?: string;
	type?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
	const { size, ...rest } = props;

	return (
		<div className="w-full">
			<input className={input({ size })} {...rest} ref={ref} />
		</div>
	);
});
