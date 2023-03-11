import { getDirective, MapperKind, mapSchema } from '@graphql-tools/utils';
import { GraphQLSchema } from 'graphql';
import { defaultFieldResolver } from 'graphql/execution';

import { sendErrorCode } from '../lib/sendErrorCode';

export function getAuthorizedSchema(schema: GraphQLSchema) {
	return mapSchema(schema, {
		[MapperKind.OBJECT_FIELD]: (fieldConfig) => {
			const fieldAuthDirective = getDirective(schema, fieldConfig, 'hasRole')?.[0];

			if (fieldAuthDirective) {
				const originalResolver = fieldConfig.resolve ?? defaultFieldResolver;
				fieldConfig.resolve = (source, args, context, info) => {
					const user = context.user;
					const requiredRole = fieldAuthDirective.role;

					if (requiredRole !== user.role.name) {
						sendErrorCode({ code: 'PERMISSION_DENIED', message: "You don't have permissions" });
					}

					return originalResolver(source, args, context, info);
				};
			}
			return fieldConfig;
		},
	});
}
