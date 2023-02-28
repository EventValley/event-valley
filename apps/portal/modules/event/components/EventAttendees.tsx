import { FC } from 'react';

import { EventUserCard } from '@/modules/event/components/EventUserCard';
import { EventUser } from '@/types/GeneratedTypes';

type EventAttendeesProps = {
	users?: EventUser[] | null;
};

export const EventAttendees: FC<EventAttendeesProps> = ({ users }) => {
	return (
		<div className="flex flex-col gap-12">
			<h3 className="text-24 font-700 leading-32">Attendees</h3>
			<div className="grid grid-cols-4 gap-12">
				{users && users.map((user) => <EventUserCard key={user.id} user={user.user} />)}
			</div>
		</div>
	);
};
