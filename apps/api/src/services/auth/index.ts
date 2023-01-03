import passport from 'passport';

import { app } from '../../app';
import { jwtAuth } from './providers/jwt';
import { localAuth } from './providers/local';
import { routes } from './routes';
import { session } from './session';

export const auth = () => {
	session();

	app.use(passport.initialize());
	app.use(passport.session());

	passport.serializeUser((user, done) => {
		done(null, user);
	});

	passport.deserializeUser((user: never, done) => {
		done(null, user);
	});

	localAuth();
	jwtAuth();
	routes();
};
