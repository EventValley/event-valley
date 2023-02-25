import NextLink from 'next/link';

import { useAuth } from '@/modules/auth/store';

import { Container } from './Container';
import { UserDropdown } from './UserDropdown';

export default function Header() {
	const {
		data: { user },
	} = useAuth();

	return (
		<header className="sticky top-0 left-0 h-full py-12">
			<div className="bg-translucent-white-1000 backdrop-blur absolute top-0 left-0 h-full w-full"></div>
			<Container className="flex items-center gap-24 justify-between relative">
				<div>
					<h1 className="text-24 font-700">EV</h1>
				</div>
				<div className="flex items-center gap-24">
					<div>
						<nav>
							<ul className="flex text-14 gap-12">
								<li>
									<NextLink href="/explore">Explore</NextLink>
								</li>
								<li>
									<NextLink href="/my-groups">My Events</NextLink>
								</li>
								<li>
									<NextLink href="/my-events">My Groups</NextLink>
								</li>
							</ul>
						</nav>
					</div>
					{user && <UserDropdown user={user} />}
				</div>
			</Container>
		</header>
	);
}
