import { useRouter } from 'next/router';

export default function Events() {
	const router = useRouter();
	const { slug } = router.query;

	return <h1>Events {slug}</h1>;
}
