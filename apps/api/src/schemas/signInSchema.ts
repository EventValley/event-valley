import { z } from 'zod';

const body = z.object({
	email: z.string().email(),
});

export const signInSchema = {
	body,
};

export const signUpSchema = {
	body,
};

export const callbackSchema = {
	params: z.object({
		token: z.string(),
	}),
};
