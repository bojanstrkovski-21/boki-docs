// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://bojanstrkovski-21.github.io',
	base: '/boki-docs',
	integrations: [
		starlight({
			title: 'Boki Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Linux',
					autogenerate: { directory: 'linux' },
				},
				{
					label: 'Windows',
					autogenerate: { directory: 'windows' },
				},
				{
					label: 'Rabota',
					autogenerate: { directory: 'rabota' },
				},
			],
		}),
	],
});
