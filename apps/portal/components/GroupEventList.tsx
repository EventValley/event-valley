export default function GroupEventList({ events }) {
	return (
		<div className="flex flex-col gap-48">
			<ul>
				{events &&
					events.map((event) => {
						return (
							<li>
								<h3>{event.name}</h3>
							</li>
						);
					})}
			</ul>
		</div>
	);
}
