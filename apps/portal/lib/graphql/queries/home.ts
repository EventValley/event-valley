import { gql } from '@apollo/client';

import { EventFragment, GroupFragment } from '@/lib/graphql/fragments';

export const HOME = gql`
	${EventFragment}
	${GroupFragment}

	query home($eventOptions: EventOptions) {
		groups(options: { personal: true, take: 4, skip: 0 }) {
			...Group
		}

		events(options: $eventOptions) {
			...Event
		}
	}
`;
