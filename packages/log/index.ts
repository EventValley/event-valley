import clc from 'cli-color';
import debug from 'debug';

const errorColor = clc.red.bold;
const warnColor = clc.yellow;
const infoColor = clc.blue;
const successColor = clc.green;

export const log = {
	info: (message: string) => {
		const info = debug(`EventValley:info`);
		info.log = console.log.bind(console);
		return info(infoColor(message));
	},
	error: (message: string) => {
		const error = debug(`EventValley:error`);
		return error(errorColor(message));
	},
	warning: (message: string) => {
		const info = debug(`EventValley:info`);
		info.log = console.log.bind(console);
		return info(warnColor(message));
	},
	success: (message: string) => {
		const info = debug(`EventValley:info`);
		info.log = console.log.bind(console);
		return info(successColor(message));
	},
};
