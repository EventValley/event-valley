import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Event } from '../lib/graphql/graphql';

interface EventCardProps {
	slug: string;
	event: Event;
}

export const EventCard: FC<EventCardProps> = ({ slug, event }) => {
	const startsAt = event.startsAt ? dayjs(Number(event.startsAt)).format('DD MMMM YYYY') : '';

	return (
		<Link href={`/group/${slug}/events/${event.id}`}>
			<div className="flex bg-white rounded-16 overflow-hidden w-full">
				<div className="flex flex-col shrink-0">
					{event.image && (
						<Image className="object-cover" src={event.image} alt="" height={144} width={240} />
					)}
				</div>
				<div className="flex-grow px-24 py-12">
					<p className="text-gray-400">{startsAt}</p>
					<h3 className="text-20 leading-28 font-600">{event.name}</h3>
				</div>
			</div>
		</Link>
	);
};
