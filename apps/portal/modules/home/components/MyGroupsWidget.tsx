import { FC } from 'react';

import { GroupCard } from '@/components/GroupCard';
import { Heading } from '@/components/Heading';
import { Stack } from '@/components/Stack';

type MyGroupsWidgetProps = {
	groups: any;
};

export const MyGroupsWidget: FC<MyGroupsWidgetProps> = ({ groups }) => {
	return (
		<Stack className="flex flex-col gap-12">
			<div>
				<Heading size="xs">My Groups</Heading>
			</div>
			<div className="flex flex-col gap-12">
				{groups.map((group: any) => {
					return <GroupCard key={group.id} name={group.name} image={group.logo} slug={group.slug} />;
				})}
			</div>
		</Stack>
	);
};
