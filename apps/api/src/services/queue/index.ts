import * as notification from './notification';

export const queues = {
	[notification.queueName]: notification.queue,
};

export const closeAllQueues = async () => Object.values(queues).forEach((q) => q.close());
