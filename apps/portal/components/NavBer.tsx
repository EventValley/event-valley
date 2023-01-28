import Image from 'next/image';

import { Link } from '@/components/Link';

export default function NavBer() {
	return (
		<nav>
			<ul className="flex flex-col gap-12">
				<li>
					<Link href="/" variant="ghost" size="medium">
						<Image src="/icons/house.svg" width="24" height="24" alt="" />
						Home
					</Link>
				</li>
				<li>
					<Link href="/explore" variant="ghost" size="medium">
						<Image src="/icons/safari.svg" width="24" height="24" alt="" />
						Explore
					</Link>
				</li>
				<li>
					<Link href="/my-groups" variant="ghost" size="medium">
						<Image src="/icons/stack.svg" width="24" height="24" alt="" />
						My Groups
					</Link>
				</li>
				<li>
					<Link href="/my-events" variant="ghost" size="medium">
						<Image src="/icons/calendar.svg" width="24" height="24" alt="" />
						My Events
					</Link>
				</li>
			</ul>
		</nav>
	);
}
