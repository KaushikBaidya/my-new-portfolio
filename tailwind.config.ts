import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#8B5CF6",
				secondary: "#de8bff",
			},
			backgroundImage: {
				"hero-background": "url('/assets/bakgrnd.png')",
				// 'footer-texture': "url('/img/footer-texture.png')",
			},
			fontFamily: {
				sans: ["var(--font-inter)"],
				mono: ["var(--font-roboto-mono)"],
			},
		},
	},
	plugins: [],
};
export default config;
