import { gql } from '@apollo/client';

import { GroupFragment } from '@/lib/graphql/fragments';

export const MY_GROUPS = gql`
	${GroupFragment}

	query myGroups($take: Int, $skip: Int) {
		groups(options: { personal: true, take: $take, skip: $skip }) {
			...Group
		}
	}
`;
