import { gql } from '@apollo/client';

export const EVENTS = gql`
	query events {
		events {
			id
			name
			description
		}
	}
`;
