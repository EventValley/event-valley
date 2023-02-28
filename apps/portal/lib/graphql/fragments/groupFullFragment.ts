import { gql } from '@apollo/client';

export const GroupFullFragment = gql`
	fragment GroupFull on GroupWithRelations {
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
		groupUsers {
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
