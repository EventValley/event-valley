import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import Link from 'next/link';

import { Heading } from '@/components/Heading';

dayjs.extend(utc);
dayjs.extend(timezone);

const groupByDate = (list: any) => {
	const groupedList: any = {};

	list.forEach((item: any) => {
		const date = dayjs.tz(Number(item.startsAt), 'UTC').format('YYYY-MM-DD');
		if (!groupedList[date]) {
			groupedList[date] = [];
		}
		groupedList[date].push(item);
	});

	return groupedList;
};

export const UpcomingEvents = ({ list }: { list: any }) => {
	const groupedList = groupByDate(list);

	return (
		<div className="flex flex-col gap-48">
			{Object.keys(groupedList).map((keyName) => (
				<div key={keyName} className="flex flex-col gap-24">
					<div className="flex flex-col gap-8">
						<Heading size="md" weight={700}>
							{dayjs.tz(keyName).format('dddd, MMMM D')}
						</Heading>
						<div className="bg-gray-200 opacity-50 h-1 w-full"></div>
					</div>
					<div className="flex flex-col gap-12">
						{groupedList[keyName].map((item: any) => (
							<Link key={item.id} href={`/group/${item.group.slug}/events/${item.id}`}>
								<div className="flex bg-white rounded-16 overflow-hidden w-full">
									<div className="flex flex-col shrink-0">
										{item.image && (
											<img className="object-cover" src={item.image} alt="" height={144} width={240} />
										)}
									</div>
									<div className="flex-grow px-24 py-12">
										<p className="text-gray-400">{dayjs(Number(item.startsAt)).format('DD MMMM YYYY')}</p>
										<h3 className="text-20 leading-28 font-600">{item.name}</h3>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			))}
		</div>
	);
};
