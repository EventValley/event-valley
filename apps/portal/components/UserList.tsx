import { FC } from 'react';

import { User } from '@/api/graphql';

import { Avatar } from './Avatar';

interface UserListProps {
	users: User[];
}

export const UserList: FC<UserListProps> = ({ users }) => {
	return (
		<ul>
			{users.map((user) => {
				return (
					<li key={user.id} className="flex items-center gap-8">
						<Avatar image={user.image} name={user.name} />
						<p className="text-14 font-600">{user.name}</p>
					</li>
				);
			})}
		</ul>
	);
};
