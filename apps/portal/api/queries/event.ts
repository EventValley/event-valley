import { gql } from '@apollo/client';

export const EVENT = gql`
	query event($id: ID!) {
		event(id: $id) {
			id
			name
			description
		}
	}
`;
