import { useQuery } from '@apollo/client';
import { FC } from 'react';

import { EventsList } from '@/components/EventsList';
import { dateFormat } from '@/lib/dateFormat';
import { EVENTS } from '@/lib/graphql';

interface EventProps {
	groupId: string;
}

export const Events: FC<EventProps> = ({ groupId }) => {
	const { loading, error, data } = useQuery(EVENTS, {
		variables: {
			options: {
				filter: {
					groupId: groupId,
					startsAt: {
						gt: dateFormat(new Date()).format('YYYY-MM-DD HH:mm'),
					},
				},
				take: 12,
				skip: 0,
			},
		},
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;

	return <EventsList events={data.events} />;
};
