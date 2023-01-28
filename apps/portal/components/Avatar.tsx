import { cva, VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import React, { FC } from 'react';

const avatar = cva(['bg-gray-50', 'flex', 'h-48', 'w-48', 'rounded-full', 'overflow-hidden'], {
	variants: {
		size: {
			sm: ['h-24', 'w-24'],
			md: ['h-36', 'w-36'],
			lg: ['h-48', 'w-48'],
		},
	},
	defaultVariants: {
		size: 'lg',
	},
});

export interface AvatarProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof avatar> {
	name: string;
	image?: string | null;
}

export const Avatar: FC<AvatarProps> = ({ image, name, size }) => {
	return (
		<div className={avatar({ size })}>{image && <Image src={image} alt={name} width="48" height="48" />}</div>
	);
};
