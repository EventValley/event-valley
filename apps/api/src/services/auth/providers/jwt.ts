import passport from 'passport';
import passportJWT from 'passport-jwt';

import { config } from '../../../config';

const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

export const jwtAuth = () => {
	passport.use(
		new JWTStrategy(
			{
				jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
				secretOrKey: config.jwtSecret,
			},
			(jwtPayload, cb) => {
				// TODO: get user from db and sign
				return cb(null, {});
			}
		)
	);
};
