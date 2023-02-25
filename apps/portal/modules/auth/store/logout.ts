import Router from 'next/router';

import { client } from '../../../lib/graphql';

export const logOut = async () => {
	await client.resetStore();
	await Router.push('/sign-in');
};
