import { gql } from '@apollo/client';

export const UserFragment = gql`
	fragment User on User {
		id
		name
		email
		image
		birthDate
		phoneNumber
		role {
			id
			name
		}
	}
`;
