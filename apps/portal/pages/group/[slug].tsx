import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import { GET_GROUP } from '../../api/operations/getGroup';

export default function Group() {
	const router = useRouter();
	const { slug } = router.query;

	const { data, loading, error } = useQuery(GET_GROUP, {
		variables: {
			id: slug,
		},
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<>
			<h1>{data.group.name}</h1>
			<p>{data.group.description}</p>
		</>
	);
}
