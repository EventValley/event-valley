import { gql } from '@apollo/client';

export const GroupFragment = gql`
	fragment Group on Group {
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
	}
`;
