import debug from 'debug';

export const log = {
	info: (message: string) => {
		const info = debug(`EventValley:info`);
		info.log = console.log.bind(console);
		return info(message);
	},
	error: (message: string) => {
		const error = debug(`EventValley:error`);
		return error(message);
	},
	warning: (message: string) => {
		const info = debug(`EventValley:info`);
		info.log = console.log.bind(console);
		return info(message);
	},
	success: (message: string) => {
		const info = debug(`EventValley:info`);
		info.log = console.log.bind(console);
		return info(message);
	},
};
