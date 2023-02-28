import { gql } from '@apollo/client';

import { GroupFragment } from '@/lib/graphql';

export const GROUPS = gql`
	${GroupFragment}

	query groups($take: Int, $skip: Int) {
		groups(options: { take: $take, skip: $skip }) {
			...Group
		}
	}
`;
