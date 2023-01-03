import jwt from 'jsonwebtoken';
import passport from 'passport';

import { app } from '../../../app';

export const login = () => {
	app.post('/login', (req, res) => {
		passport.authenticate('local', { session: false }, (err, user, info) => {
			if (err || !user) {
				return res.status(400).json({
					message: info ? info.message : 'Login failed',
					user: user,
				});
			}

			req.login(user, { session: false }, (err) => {
				if (err) {
					res.send(err);
				}

				const token = jwt.sign(user, 'your_jwt');

				return res.json({ user, token });
			});
		})(req, res);
	});
};
