export type GroupOptions = {
	id: string;
};

export type GroupListOptions = {
	options?: {
		filter?: {
			where?: {
				id?: string;
				name?: string;
				createdAt?: string;
				updatedAt?: string;
			};
		};
		take: number;
		skip: number;
		cursor: number;
		orderBy: number;
	};
};

export type CreateGroupInput = {
	input: {
		name: string;
		description: string;
		city?: string;
		postalCode?: string;
		region?: string;
		country?: string;
		logo?: string;
		banner?: string;
		creatorId?: string;
	};
};

export type UpdateGroupInput = {
	id: string;
	name: string;
	description: string;
	city?: string;
	postalCode?: string;
	region?: string;
	country?: string;
	logo?: string;
	banner?: string;
};
