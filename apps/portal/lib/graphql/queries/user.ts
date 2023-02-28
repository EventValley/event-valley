import { gql } from '@apollo/client';

import { UserFragment } from '@/lib/graphql/fragments/user';

export const USER = gql`
	${UserFragment}
	query user {
		user {
			...User
		}
	}
`;
