import db from '../../lib/db';
import { randomString } from '../../utils/random-string';

export const getVerificationToken = async (userId: string) => {
	const token = await db.verificationToken.create({
		data: {
			token: randomString(32),
			identifier: userId,
			expires: new Date(new Date().getTime() + 60 * 60 * 24 * 1000),
		},
	});

	return token.token;
};
