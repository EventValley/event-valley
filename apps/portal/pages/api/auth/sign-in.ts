import type { NextApiRequest, NextApiResponse } from 'next';

import { authClient } from '../../../lib/authClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		const { email } = req.body;
		const response = await authClient.post(
			'/sign-in',
			{ email },
			{ headers: { origin: 'http://localhost:4000' } }
		);
		// Process a POST req

		if (response.status === 200) {
			res.status(200).json({ message: 'Verification token has been sent to your email!' });
		} else {
			res.status(401).json({ error: 'Unauthorized' });
		}
	} else {
		// Handle any other HTTP method
	}
}
