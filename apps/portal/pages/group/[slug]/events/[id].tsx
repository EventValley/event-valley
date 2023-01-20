import { useRouter } from 'next/router';

export default function GroupEvent() {
	const router = useRouter();
	const { slug, id } = router.query;

	return (
		<h1>
			Group Event {slug} {id}
		</h1>
	);
}
