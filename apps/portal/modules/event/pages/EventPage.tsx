import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { useRouter } from 'next/router';

import { Container } from '@/components/Container';
import { Stack } from '@/components/Stack';
import { EventUser, Group, useEventQuery } from '@/lib/graphql/graphql';
import { EventAddressWidget } from '@/modules/event/components/EventAddressWidget';
import { EventAttendees } from '@/modules/event/components/EventAttendees';
import { EventDateWidget } from '@/modules/event/components/EventDateWidget';
import { EventDetails } from '@/modules/event/components/EventDetails';
import { EventFooter } from '@/modules/event/components/EventFooter';
import { EventGroupWidget } from '@/modules/event/components/EventGroupWidget';

dayjs.extend(utc);
dayjs.extend(timezone);

export const EventPage = () => {
	const router = useRouter();
	const { id } = router.query;

	const { data, loading, error } = useEventQuery({
		variables: {
			id: id as string,
		},
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	if (!data || !data.event) return <p>Not found</p>;

	const { event } = data;

	return (
		<Stack className="relative">
			<Container>
				<div className="flex flex-col gap-12 mb-24">
					<h1 className="text-32 leading-40 font-700">{data.event.name}</h1>
					<div className="flex flex-row gap-48">
						<div className="flex flex-col gap-48 w-9/12">
							<EventDetails imageUrl={event?.image} description={event?.description} />
							<EventAttendees users={event?.eventUsers as EventUser[]} />
						</div>
						<div className="flex flex-col gap-24 w-3/12 flex-shrink-0">
							<EventGroupWidget group={event?.group as Group}></EventGroupWidget>
							<div className="bg-current opacity-20 h-1 w-full"></div>
							<EventDateWidget startsAt={event?.startsAt as string} endsAt={event?.endsAt as string} />
							<div className="bg-current opacity-20 h-1 w-full"></div>
							<EventAddressWidget venue={event?.venue} />
						</div>
					</div>
				</div>
			</Container>
			<EventFooter />
		</Stack>
	);
};
