import { useQuery } from '@apollo/client';
import Link from 'next/link';

import { GROUPS } from '@/lib/graphql';

export default function Index() {
	const { data, loading, error } = useQuery(GROUPS, {
		variables: {
			take: 24,
			skip: 0,
		},
	});

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
