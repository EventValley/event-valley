import { gql } from '@apollo/client';

export const GET_EVENT = gql`
	query GetEvent($id: ID!) {
		event(id: $id) {
			id
			name
			description
		}
	}
`;
