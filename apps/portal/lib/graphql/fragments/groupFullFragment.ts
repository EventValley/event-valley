import { gql } from '@apollo/client';

export const GroupFullFragment = gql`
	fragment GroupFullFragment on Group {
		id
		name
		slug
		description
		city
		postalCode
		region
		country
		logo
		banner
		users {
			id
			groupRole {
				id
				name
			}
			user {
				id
				name
				email
				image
			}
			createdAt
			modifiedAt
		}
		events {
			id
			name
			image
			description
			startsAt
			venue {
				streetAddress
				city
				postalCode
				region
				country
			}
		}
		createdAt
		modifiedAt
	}
`;
