import '../styles/globals.css';

import { ApolloProvider } from '@apollo/client/react';
import type { AppProps } from 'next/app';

import Layout from '@/components/Layout';
import { AuthContextProvider } from '@/modules/auth/store';

import { client } from '../lib/graphql';

export default function App({ Component, pageProps: { ...pageProps } }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<AuthContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</AuthContextProvider>
		</ApolloProvider>
	);
}
