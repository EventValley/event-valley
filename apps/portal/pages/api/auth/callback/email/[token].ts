import { NextApiRequest, NextApiResponse } from 'next';

import { authClient } from '../../../../../lib/authClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		const { token } = req.query;

		if (!token) {
			res.redirect(307, '/sign-in');
		}

		try {
			const response = await authClient.get(`/callback/email/${token}`, {
				headers: { origin: 'http://localhost:4000' },
			});

			res.setHeader('Set-Cookie', `ev=${response.data.token}; Path=/; `);

			res.redirect(307, '/explore');
		} catch (e) {
			console.log('e', e);
			// console.log('e', e);
			res.json({ message: 'error' });
		}
	} else {
		// Handle any other HTTP method
	}
}
