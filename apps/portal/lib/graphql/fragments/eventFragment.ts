import { gql } from '@apollo/client';

export const EventFragment = gql`
	fragment Event on Event {
		id
		name
		description
		url
		streamUrl
		startsAt
		endsAt
		canceled
		image
		group {
			id
			slug
			name
			logo
			banner
		}
		venue {
			id
			name
			postalCode
			region
			country
			city
			streetAddress
			latitude
			longitude
		}
	}
`;
