import { FC } from 'react';

import { User } from '../lib/graphql/graphql';
import { Avatar } from './Avatar';

interface UserGridProps {
	users: User[];
}

export const UserGrid: FC<UserGridProps> = ({ users }) => {
	return (
		<ul className="flex flex-wrap gap-8">
			{users.map((user) => {
				return (
					<li key={user.id}>
						<Avatar image={user.image} name={user.name} />
					</li>
				);
			})}
		</ul>
	);
};
