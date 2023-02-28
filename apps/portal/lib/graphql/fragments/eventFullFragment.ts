import { gql } from '@apollo/client';

export const EventFullFragment = gql`
	fragment EventFull on Event {
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
			name
			logo
			banner
		}
		eventUsers {
			id
			user {
				name
				image
			}
			eventRole {
				id
				name
			}
			rsvp {
				id
				name
			}
		}
		venue {
			id
			name
			streetAddress
			city
			region
			country
			latitude
			longitude
		}
	}
`;
