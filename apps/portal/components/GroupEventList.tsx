export default function GroupEventList({ events }: any) {
	return (
		<div className="flex flex-col gap-48">
			<ul>
				{events &&
					events.map((event: any) => {
						return (
							<li key={event.name}>
								<h3>{event.name}</h3>
							</li>
						);
					})}
			</ul>
		</div>
	);
}
