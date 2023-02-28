import { gql } from '@apollo/client';

import { EventFragment } from '@/lib/graphql/fragments/eventFragment';

export const MY_EVENTS = gql`
	${EventFragment}

	query myEvents($take: Int, $skip: Int) {
		events(options: { personal: true, take: $take, skip: $skip }) {
			...Event
		}
	}
`;
