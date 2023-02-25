import { cva, type VariantProps } from 'class-variance-authority';
import React, { FC } from 'react';

const formRow = cva(['flex', 'gap-8'], {
	variants: {
		direction: {
			row: ['flex-row'],
			column: ['flex-col'],
		},
	},
	defaultVariants: {
		direction: 'column',
	},
});

export interface FormRowProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof formRow> {
	children: React.ReactNode;
	className?: string;
}

export const FormRow: FC<FormRowProps> = ({ direction, ...props }) => {
	return <div className={formRow({ direction })} {...props} />;
};
