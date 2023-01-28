import '../styles/globals.css';

import { ApolloProvider } from '@apollo/client/react';
import type { AppProps } from 'next/app';

import { client } from '@/api';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps: { ...pageProps } }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
}
