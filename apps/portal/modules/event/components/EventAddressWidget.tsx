import { FC } from 'react';

type EventAddressWidgetProps = {
	venue: any;
};

export const EventAddressWidget: FC<EventAddressWidgetProps> = ({ venue }) => {
	return (
		<div>
			<p>{venue.streetAddress}</p>
			<p>
				{venue.city} {venue.country}
			</p>
			<div className="flex gap-8"></div>
		</div>
	);
};
