import { FC } from 'react';

type EventDescriptionProps = {
	imageUrl?: string | null;
	description?: string | null;
};

export const EventDetails: FC<EventDescriptionProps> = ({ imageUrl, description }) => {
	return (
		<div className="flex flex-col gap-24">
			{imageUrl && (
				<div className="flex aspect-video w-full rounded-16 overflow-hidden">
					<img className="object-cover w-full" src={imageUrl} alt="" />
				</div>
			)}

			{description && (
				<div className="flex flex-col gap-8">
					<h3 className="text-24 font-700 leading-32">Details</h3>
					<p className="text-16 leading-24">{description}</p>
				</div>
			)}
		</div>
	);
};
