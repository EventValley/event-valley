import env from 'env-var';

export const config = {
	apiUrl: env.get('API_URL').default('/graphql').asString(),
	authUrl: env.get('AUTH_URL').default('http://localhost:3000/auth').asString(),
};
