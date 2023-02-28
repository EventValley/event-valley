import { useQuery } from '@apollo/client';

import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Stack } from '@/components/Stack';
import { MY_GROUPS } from '@/lib/graphql';
import { GroupCard } from '@/modules/myGroups/components/GroupCard';
import { GroupFragment } from '@/types/GeneratedTypes';

type MyGroupsData = {
	groups: GroupFragment[] | [];
};

export const MyGroupsPage = () => {
	const { loading, data } = useQuery<MyGroupsData>(MY_GROUPS, {
		variables: {
			take: 24,
			skip: 0,
		},
	});

	if (loading) return <div>Loading...</div>;
	if (!data) return <div>No Data</div>;

	return (
		<Container className="flex flex-col gap-48">
			<Heading as="h1" size="lg">
				My groups
			</Heading>

			<Stack className="flex flex-row gap-48">
				<Stack className="flex flex-col gap-48 w-9/12">
					<Stack className="grid grid-cols-3 gap-12">
						{data.groups.map((group) => (
							<GroupCard key={group.id} group={group} />
						))}
					</Stack>
				</Stack>
				<Stack className="flex flex-col gap-48 w-3/12 flex-shrink-0">1</Stack>
			</Stack>
		</Container>
	);
};
