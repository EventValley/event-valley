import dayjs from 'dayjs';
import { FC } from 'react';

type EventDateWidgetProps = {
	startsAt: string;
	endsAt: string;
};

export const EventDateWidget: FC<EventDateWidgetProps> = ({ startsAt, endsAt }) => {
	return (
		<div>
			<p>{dayjs(Number(startsAt)).format('dddd, MMMM D, YYYY')}</p>
			<div className="flex gap-8">
				<p>{dayjs.tz(Number(startsAt), 'UTC').format('HH:mm')}</p>
				<p>{dayjs.tz(Number(endsAt), 'UTC').format('HH:mm')}</p>
			</div>
		</div>
	);
};
