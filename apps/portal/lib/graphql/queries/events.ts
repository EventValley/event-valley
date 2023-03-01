import { gql } from '@apollo/client';

import { EventFragment } from '@/lib/graphql';

export const EVENTS = gql`
	${EventFragment}

	query events($options: EventOptions) {
		events(options: $options) {
			...Event
		}
	}
`;
