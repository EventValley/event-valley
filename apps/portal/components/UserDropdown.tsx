import { useState } from 'react';

import { UserDropdownNav } from '@/components/UserDropdownNav';

import { getInitials } from '../lib/getInitials';
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
				{user && user.image ? (
					<img src={user.image} alt="user profile image" />
				) : (
					<div>{getInitials(user.name)}</div>
				)}
			</button>
			{isVisible && <UserDropdownNav user={user} />}
		</div>
	);
};
