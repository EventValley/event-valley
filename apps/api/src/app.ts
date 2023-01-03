import { log } from '@event-valley/log';
import express from 'express';

import { auth } from './services/auth';

export const app = express();
const port = process.env.PORT || 3000;

(async () => {
	auth();

	const server = app.listen(port, () => {
		log.info(`EventValley API server have been started at http://localhost:${port}/`);
	});

	['SIGINT', 'SIGTERM'].forEach((signal) => {
		process.once(signal, async () => {
			server.close();
		});
	});
})();
