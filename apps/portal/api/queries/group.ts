import { gql } from '@apollo/client';

import { GroupFullFragment } from '../fragments/groupFullFragment';

export const GROUP = gql`
	${GroupFullFragment}

	query group($id: ID, $slug: String) {
		group(id: $id, slug: $slug) {
			...GroupFullFragment
		}
	}
`;
