import { FC } from 'react';

import { Avatar } from '@/components/Avatar';
import { Heading } from '@/components/Heading';
import { Link } from '@/components/Link';
import { Stack } from '@/components/Stack';

type GroupCardProps = {
	slug?: string;
	name: string;
	image: string;
};

export const GroupCard: FC<GroupCardProps> = ({ slug, name, image }) => {
	return (
		<Link href={`/group/${slug}`}>
			<Stack className="flex items-center gap-12">
				<Avatar name={name} image={image} size="xxl"></Avatar>
				<Heading>{name}</Heading>
			</Stack>
		</Link>
	);
};
