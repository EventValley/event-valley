import { User } from '../../../lib/graphql/graphql';

export const EventUserCard = ({ user }: { user: User }) => {
	return (
		<div className="bg-white flex flex-col items-center justify-center gap-12 rounded-16 p-24 overflow-hidden">
			<div className="rounded-full h-48 w-48 overflow-hidden">
				<img src={user.image as string} alt="" />
			</div>
			<p>{user.name}</p>
		</div>
	);
};
