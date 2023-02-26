import { useState } from 'react';

import { Avatar } from '@/components/Avatar';
import { UserDropdownNav } from '@/components/UserDropdownNav';

import { User } from '../lib/graphql/graphql';

export const UserDropdown = ({ user }: { user: User }) => {
	const [isVisible, setVisibility] = useState(false);

	const openDropdown = () => setVisibility(!isVisible);
	const closeDropdown = () => {
		setTimeout(() => {
			setVisibility(false);
		}, 100);
	};

	return (
		<div className="relative">
			<button
				className="appearance-none bg-gray-200 rounded-full flex items-center justify-center h-32 w-32 overflow-hidden"
				onClick={openDropdown}
				onBlur={closeDropdown}>
				<Avatar image={null} name={user.name} />
			</button>
			{isVisible && <UserDropdownNav user={user} />}
		</div>
	);
};
