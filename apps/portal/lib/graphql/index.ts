import { ApolloClient, from, HttpLink, InMemoryCache, ServerError } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import Cookies from 'js-cookie';

import { config } from '../../config';

const httpLink = new HttpLink({ uri: config.apiUrl });

const logoutLink = onError(({ networkError }) => {
	if (networkError && (networkError as ServerError).statusCode === 401) {
		console.log('networkError', networkError);
		Cookies.remove('ev');
		window.location.href = '/sign-in';
	}
});

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: from([logoutLink, httpLink]),
});
