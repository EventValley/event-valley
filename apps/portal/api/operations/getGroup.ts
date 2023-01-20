import { gql } from '@apollo/client';

export const GET_GROUP = gql`
	query GetGroup($id: ID!) {
		group(id: $id) {
			id
			name
			description
		}
	}
`;
