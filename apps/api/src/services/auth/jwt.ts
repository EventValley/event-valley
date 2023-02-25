import jwt from 'jsonwebtoken';

import { config } from '../../config';

export const verificationToken = ({ userId }: { userId: string }) => {
	return jwt.sign(
		{
			userId: userId,
			iat: new Date().getTime(),
		},
		config.jwtSecret,
		{ expiresIn: '30m' }
	);
};

export const signJWT = ({ userId }: { userId: string }) => {
	return jwt.sign(
		{
			userId: userId,
			iat: new Date().getTime(),
		},
		config.jwtSecret
	);
};

export const verifyJWT = (token: string) => {
	try {
		return jwt.verify(token, config.jwtSecret);
	} catch (error) {
		console.log('verify error', error);
		return false;
	}
};
