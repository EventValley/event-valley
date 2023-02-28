import { gql } from '@apollo/client';

import { EventFullFragment } from '@/lib/graphql/fragments/eventFullFragment';

export const EVENT = gql`
	${EventFullFragment}

	query event($id: ID!) {
		event(id: $id) {
			...EventFull
		}
	}
`;
