import { useQuery } from '@apollo/client';
import Link from 'next/link';

import { GET_GROUPS } from '../api/operations/getGroups';

export default function Explore() {
	const { data, loading, error } = useQuery(GET_GROUPS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<>
			<h1>Explore</h1>
			<ul>
				{data.groups.map((group: any) => (
					<li key={group.id}>
						<Link href={`/group/${group.id}`}>{group.name}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
