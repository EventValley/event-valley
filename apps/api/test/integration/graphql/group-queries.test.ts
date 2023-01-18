import { describe, expect, test } from 'vitest';

import { build } from '../../../test-helpers/helper';

describe('Group Queries', () => {
	const app = build();

	test('should return list of groups', async () => {
		const res = await app.inject({
			method: 'POST',
			url: '/api',
			headers: {
				'Content-Type': 'application/json',
			},
			payload: {
				query: ` query GetGroups { groups { id, name, description, creatorId, createdAt, modifiedAt } } `,
			},
		});

		expect(res.statusCode).toBe(200);
		expect(JSON.parse(res.body)).toEqual({
			data: {
				groups: expect.arrayContaining([
					expect.objectContaining({
						id: expect.any(String),
						name: expect.any(String),
						description: expect.any(String),
						creatorId: expect.any(String),
						createdAt: expect.any(String),
						modifiedAt: expect.any(String),
					}),
				]),
			},
		});
	});
});
