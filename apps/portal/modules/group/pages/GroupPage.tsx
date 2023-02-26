import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import GroupsMembersList from '@/components/GroupMemerList';
import { Event, Group, GroupUser, useGroupQuery } from '@/lib/graphql/graphql';
import { About, Events } from '@/modules/group/components';

export const GroupPage = ({}) => {
	const router = useRouter();
	const { slug, show } = router.query;

	const { data, loading, error } = useGroupQuery({
		variables: {
			slug: slug as string,
		},
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	if (!data || !data.group) return <p>Not found</p>;

	const Content = () => {
		switch (show) {
			case 'events':
				return <Events group={data.group as Group} events={data.group?.events as Event[]} />;
			case 'members':
				return <GroupsMembersList users={data.group?.groupUsers} />;
			default:
				return <About content={data.group?.description} groupUsers={data.group?.groupUsers as GroupUser[]} />;
		}
	};

	return (
		<Container>
			<div className="flex flex-col gap-12 mb-24">
				<h1 className="text-32 leading-40 font-700">{data.group.name}</h1>

				<ul className="text-gray-600 flex gap-12">
					<li>
						{data.group.city}, {data.group.country}
					</li>
				</ul>
			</div>

			<div className="flex overflow-hidden aspect-ultra-wide rounded-16 ultra-wide">
				<img src={data.group.banner || ''} alt="" className="object-cover w-full" />
			</div>

			<div className="flex gap-24 py-12 border-b border-gray-200">
				<ul className="flex grow items-center gap-24">
					<li>
						<Link href={`/group/${slug}`} className="text-gray-600 font-700">
							About
						</Link>
					</li>
					<li>
						<Link href={`/group/${slug}/?show=events`} className="text-gray-600 font-700">
							Events
						</Link>
					</li>
					<li>
						<Link href={`/group/${slug}/?show=members`} className="text-gray-600 font-700">
							Members
						</Link>
					</li>
				</ul>
				<div>
					<Button>Join group</Button>
				</div>
			</div>

			<div className="grid py-24">
				<Content />
			</div>
		</Container>
	);
};
