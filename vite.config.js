import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
		}
	}
};

export default config;
