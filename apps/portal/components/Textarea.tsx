import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const textarea = tv({
	base: ['w-full', 'appearance-none', 'resize-none'],
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
				'h-192',
			],
			lg: [''],
		},
	},
	defaultVariants: {
		size: 'md',
	},
});

export interface InputProps extends VariantProps<typeof textarea> {
	id?: string;
	name?: string;
	type?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, InputProps>(function Textarea(props, ref) {
	const { size, ...rest } = props;

	return (
		<div className="w-full">
			<textarea className={textarea({ size })} {...rest} ref={ref} />
		</div>
	);
});
