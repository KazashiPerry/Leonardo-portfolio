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
				'celeste': '#79c0ea',
				'crema': '#f6eec0',
				'celeste-crema': '#bae6fd',
				'verde-azul': '#35879b'
			},
			backgroundImage: {
				'svg-image': "url('/public/wave-haikei.svg')",
				'svg-image-top': "url('/public/wave-haikei-top.svg')",
				'svg-crema-top': "url('/public/wave-haikei-crema-top.svg')",
				'svg-crema-bot': "url('/public/wave-haikei-crema-bot.svg')",
				'circle-dark': "url('/public/circle-dark.svg')"
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}