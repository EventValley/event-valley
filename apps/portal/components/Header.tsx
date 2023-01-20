import Link from 'next/link';

export default function Header() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/explore">Explore</Link>
					</li>
					<li>
						<Link href="/my-groups">My Groups</Link>
					</li>
					<li>
						<Link href="/my-events">My Events</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
