import axios from 'axios';

import { config } from '../config';

export const authClient = axios.create({
	baseURL: config.authUrl,
	headers: {
		'Content-Type': 'application/json',
	},
});
