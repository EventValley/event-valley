import { faker } from '@faker-js/faker';
import { describe, expect, test } from 'vitest';

import { build } from '../../../test-helpers/helper';

const { company, lorem, address, image } = faker;

describe('Group Mutations', () => {
	const app = build();

	test('should create new group', async () => {
		const newGroup = {
			name: company.name(),
			description: lorem.words(),
			city: address.city(),
			postalCode: address.zipCode(),
			region: address.state(),
			country: address.country(),
			logo: image.imageUrl(150, 150, 'tech', true),
			banner: image.imageUrl(150, 150, 'tech', true),
			creatorId: faker.datatype.uuid(),
		};

		const res = await app.inject({
			method: 'POST',
			url: '/api',
			headers: {
				'Content-Type': 'application/json',
			},
			payload: {
				query: `mutation CreateGroup($name: String!, $description: String!, $city: String, $postalCode: String, $region: String, $country: String, $logo: String, $banner: String, $creatorId: String) {
					createGroup(input: { name: $name, description: $description, city: $city, postalCode: $postalCode, region: $region, country: $country, logo: $logo, banner: $banner, creatorId: $creatorId }) {
						id
						name
						description
						city
						country
						postalCode
						region
						logo
						banner
						creatorId
						createdAt
						modifiedAt
					}
				}`,
				variables: newGroup,
			},
		});

		expect(res.statusCode).toBe(200);
		expect(JSON.parse(res.body)).toEqual({
			data: {
				createGroup: {
					id: expect.any(String),
					createdAt: expect.any(String),
					modifiedAt: expect.any(String),
					...newGroup,
				},
			},
		});
	});
});
