import Link from 'next/link';

import { useGroupsQuery } from '@/api/graphql';

export default function Index() {
	const { data, loading, error } = useGroupsQuery();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<>
			<h1>Explore</h1>
			<ul>
				{data?.groups.map((group: any) => (
					<li key={group.id}>
						<Link href={`/group/${group.slug}`}>{group.name}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
