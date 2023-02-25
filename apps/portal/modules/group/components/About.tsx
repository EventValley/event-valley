import { FC } from 'react';

import { Text } from '@/components/Text';
import { UserGrid } from '@/components/UserGrid';
import { UserList } from '@/components/UserList';

import { GroupUser } from '../../../lib/graphql/graphql';

interface AboutProps {
	content?: string | null;
	groupUsers?: GroupUser[] | null;
}

export const About: FC<AboutProps> = ({ content, groupUsers }) => {
	const groupOrganizers = groupUsers
		? groupUsers.filter((user) => user.groupRole.name === 'Administrator')
		: null;
	const organizers = groupOrganizers ? groupOrganizers.map((groupOrganizer) => groupOrganizer.user) : null;
	const groupMembers = groupUsers
		? groupUsers.filter((user) => user.groupRole.name === 'Member').slice(0, 24)
		: null;
	const members = groupMembers ? groupMembers.map((groupMember) => groupMember.user) : null;

	return (
		<div className="flex gap-48">
			<div className="w-2/3">
				<Text size={{ initial: 'sm', md: 'md' }}>{content}</Text>
			</div>

			<div className="flex flex-col gap-48 w-1/3">
				{organizers && (
					<div className="flex flex-col gap-12">
						<h2 className="text-gray-1000 md:text-24 leading-28 font-600">Organizers</h2>
						<UserList users={organizers} />
					</div>
				)}

				{members && (
					<div className="flex flex-col gap-12">
						<h2 className="text-gray-1000 md:text-24 leading-28 font-600">Members</h2>

						<UserGrid users={members} />
					</div>
				)}
			</div>
		</div>
	);
};
