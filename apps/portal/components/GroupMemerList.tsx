import Image from 'next/image';

export default function GroupsMembersList({ users }) {
	const organizers = users.filter((user: any) => user.groupRole.name === 'Administrator');
	const members = users.filter((user: any) => user.groupRole.name === 'Member');

	return (
		<div className="flex gap-48">
			<div className="flex flex-col gap-48 w-1/5"></div>
			<div className="w-4/5">
				<ul className="flex flex-col gap-8">
					{members &&
						members.map((member) => {
							return (
								<li key={member.id} className="flex items-center gap-8">
									<div className="flex rounded-24 overflow-hidden h-48 w-48">
										<Image src={member.user.image} alt="user image" height={48} width={48} />
									</div>
									<p className="font-600">{member.user.name}</p>
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
}
