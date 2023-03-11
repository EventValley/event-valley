import { GraphQLError } from 'graphql/index';

export const sendErrorCode = ({ code, message }: { code: string; message: string }) => {
	throw new GraphQLError(message, {
		extensions: {
			code,
		},
	});
};
