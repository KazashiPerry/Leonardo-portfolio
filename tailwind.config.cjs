/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				'blanco': '#f3f8f2',
				'negro': '#191919'
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}