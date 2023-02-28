import { FC } from 'react';

import { Group } from '@/types/GeneratedTypes';

type EventGroupWidgetProps = {
	group: Group;
};

export const EventGroupWidget: FC<EventGroupWidgetProps> = ({ group }) => {
	return (
		<div className="flex items-center gap-12">
			<div className="flex rounded-8 h-48 w-48 overflow-hidden flex-shrink-0">
				<img src={group?.logo as string} alt="" />
			</div>
			<h2 className="text-14 leading-20 font-700">{group?.name}</h2>
		</div>
	);
};
