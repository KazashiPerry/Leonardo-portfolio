/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			screens: {
				"xm": "300px"
			},
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
				'svg-image': "url('/Leonardo-portfolio/wave-haikei.svg')",
				'svg-image-top': "url('/Leonardo-portfolio/wave-haikei-top.svg')",
				'svg-crema-top': "url('/Leonardo-portfolio/wave-haikei-crema-top.svg')",
				'svg-crema-bot': "url('/Leonardo-portfolio/wave-haikei-crema-bot.svg')",
				'circle-dark': "url('/Leonardo-portfolio/circle-dark.svg')"
			}
		},
	},
	plugins: [
        require('flowbite/plugin')
    ]
}