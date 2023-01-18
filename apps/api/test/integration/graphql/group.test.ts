import { describe, expect, test } from 'vitest';

import { build } from '../../../test-helpers/helper';

describe('Group', () => {
	const app = build();

	test('should return groups', async () => {
		const res = await app.inject({
			method: 'POST',
			url: '/api',
			headers: {
				'Content-Type': 'application/json',
			},
			payload: { query: `{ groups { id } }` },
		});

		expect(res.statusCode).toBe(200);
	});
});
