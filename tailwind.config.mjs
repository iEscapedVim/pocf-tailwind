/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				'primary': '#eec731',
				'secondary': '#303030',
				'tertiary': '#534a28',
				'white': '#ffffff',
				'black': '#000000',
			},
		},
	},
	plugins: [
		require('flowbite/plugin'),
		require('@tailwindcss/typography')
	],
}