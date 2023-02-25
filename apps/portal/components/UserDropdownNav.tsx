import { button } from '@/components/Button';
import { HStack } from '@/components/HStack';
import { Text } from '@/components/Text';
import { VStack } from '@/components/VStack';

import { User } from '../lib/graphql/graphql';

export const UserDropdownNav = ({ user }: { user: User }) => {
	return (
		<div className="bg-translucent-white-900 backdrop-blur text-current translate-y-24 right-0 absolute p-8 min-w-[240px] rounded-16 z-100">
			<VStack as="ul">
				<VStack as="li" className="gap-2 px-12 pt-8">
					<Text as="span" weight={700}>
						{user.name}
					</Text>
				</VStack>
				<li>
					<HStack className="px-12">
						<div className="bg-current opacity-10 h-1 w-full my-12"></div>
					</HStack>
				</li>
				<li>
					<button className={`${button({ variant: 'secondary', size: 'small' })} w-full`}>Profile</button>
				</li>
				<li>
					<HStack className="px-12">
						<div className="bg-current opacity-10 h-1 w-full my-12"></div>
					</HStack>
				</li>
				<li>
					<button className={`${button({ variant: 'secondary', size: 'small' })} w-full`}>Sign out</button>
				</li>
			</VStack>
		</div>
	);
};
