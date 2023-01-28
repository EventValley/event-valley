import env from 'env-var';

export const config = {
	apiUrl: env.get('API_URL').default('http://localhost:3000/api').asString(),
};
