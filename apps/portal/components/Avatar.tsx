import Image from 'next/image';
import React, { FC } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { Text } from '@/components/Text';
import { getInitials } from '@/lib/getInitials';

const avatar = tv({
	base: [
		'bg-gray-50',
		'flex',
		'items-center',
		'justify-center',
		'h-48',
		'w-48',
		'overflow-hidden',
		'relative',
	],
	variants: {
		rounded: {
			true: ['rounded-full'],
		},
		size: {
			sm: ['rounded-8', 'h-24', 'w-24'],
			md: ['rounded-8', 'h-36', 'w-36'],
			lg: ['rounded-8', 'h-48', 'w-48'],
			xl: ['rounded-8', 'h-56', 'w-56'],
			xxl: ['rounded-12', 'h-64', 'w-64'],
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
		<div className={avatar({ size })}>
			{image ? (
				<Image src={image} alt={name} height={64} width={64} />
			) : (
				<Text size="sm" weight={700}>
					{getInitials(name)}
				</Text>
			)}
		</div>
	);
};
