import { dateFormat } from '@/lib/dateFormat';
import { EventFragment } from '@/lib/graphql/graphql';

export const groupEventsByDate = (events: EventFragment[]) => {
	const groupedList: Record<string, EventFragment[]> = {};

	events.forEach((event) => {
		const date = dateFormat.tz(Number(event.startsAt), 'UTC').format('YYYY-MM-DD');
		if (!groupedList[date]) {
			groupedList[date] = [];
		}
		groupedList[date].push(event);
	});

	return groupedList;
};
