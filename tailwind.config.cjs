/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      container: {
        screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1280px',
        },
        center: true,
        padding: "2rem"
      }
    },
	},
	plugins: [],
}
