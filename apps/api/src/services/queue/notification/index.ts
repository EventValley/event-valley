import { Job, Queue, Worker } from 'bullmq';

import { connection } from '../connection';
import { UserVerification, userVerification } from './userVerification';

export const queueName = 'notification';

export enum NOTIFICATION_TYPE {
	USER_VERIFICATION = 'userVerification',
}

type NotificationJobData = UserVerification;

export const queue = new Queue(queueName, {
	connection,
	defaultJobOptions: {
		attempts: 3,
		removeOnComplete: true,
	},
});

export const worker = new Worker(
	queueName,
	async (job: Job<NotificationJobData, void, NOTIFICATION_TYPE>) => {
		switch (job.name) {
			case NOTIFICATION_TYPE.USER_VERIFICATION:
				await userVerification(job.data);
				// log.info(nameSpace, 'Welcome email has been sent');
				break;
			default:
				// log.warning(nameSpace, 'Unknown notification job');
				return;
		}
	},
	{ connection }
);

export const close = async () => {
	await queue.close();
	await worker.close();
};
