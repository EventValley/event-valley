import { Heading } from '@/components/Heading';
import { Link } from '@/components/Link';
import { Stack } from '@/components/Stack';

export const GroupCard = ({ group }: any) => {
	return (
		<Link href={`/group/${group.slug}`}>
			<Stack direction="vertical" className="bg-white p-8 rounded-16 gap-8 justify-center">
				<Stack className="flex rounded-12 overflow-hidden aspect-square w-full">
					<img className="object-cover" src={group.logo} alt="" />
				</Stack>
				<Heading as="h3" size="xs" weight={700} align="center">
					{group.name}
				</Heading>
			</Stack>
		</Link>
	);
};
