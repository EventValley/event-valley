import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		include: ['test/integration/**'],
		coverage: {
			reporter: ['text', 'json', 'html'],
		},
	},
});
