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
				'blanco': '#f2f2f2',
				'negro': '#121212',
				'gris': '#262626',
				'celeste': '#79c0ea'
			},
			backgroundImage: {
				'svg-image': "url('/public/wave-haikei.svg')"
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}