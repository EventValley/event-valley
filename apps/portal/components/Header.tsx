import NextLink from 'next/link';

import { useAuth } from '@/modules/auth/store';

import { Container } from './Container';
import { UserDropdown } from './UserDropdown';

export default function Header() {
	const {
		data: { user },
	} = useAuth();

	return (
		<header className="sticky top-0 left-0 w-full py-12 z-100">
			<div className="bg-translucent-white-1000 backdrop-blur absolute top-0 left-0 h-full w-full"></div>
			<Container className="flex items-center gap-24 justify-between relative">
				<div>
					<NextLink href="/">
						<h1 className="text-24 font-700">EV</h1>
					</NextLink>
				</div>
				{user ? (
					<div className="flex items-center gap-24">
						<div>
							<nav>
								<ul className="flex text-14 gap-12">
									<li>
										<NextLink href="/explore" className="font-700">
											Explore
										</NextLink>
									</li>
									<li>
										<NextLink href="/my-groups" className="font-700">
											My Groups
										</NextLink>
									</li>
									<li>
										<NextLink href="/my-events" className="font-700">
											My Events
										</NextLink>
									</li>
								</ul>
							</nav>
						</div>
						<UserDropdown user={user} />
					</div>
				) : (
					<nav>
						<ul className="flex text-14 gap-12">
							<li>
								<NextLink href="/sign-in">Sign In</NextLink>
							</li>
							<li>
								<NextLink href="/sign-up">Sign Up</NextLink>
							</li>
						</ul>
					</nav>
				)}
			</Container>
		</header>
	);
}
