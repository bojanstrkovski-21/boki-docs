// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://YOUR_USERNAME.github.io',
	base: '/boki-docs',
	integrations: [
		starlight({
			title: 'Boki Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Linux',
					items: [
						{
							label: 'Linux Script',
							autogenerate: { directory: 'linux/Linux-script' }
						},
					],
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
