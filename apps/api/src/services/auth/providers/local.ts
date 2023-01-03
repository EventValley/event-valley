import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

export const localAuth = () => {
	passport.use(
		new LocalStrategy(
			{
				usernameField: 'email',
				passwordField: 'password',
			},
			(email, password, cb) => {
				// TODO: get user from db
				return cb(null, {});
			}
		)
	);
};
