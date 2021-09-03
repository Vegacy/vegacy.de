module.exports = {
	mode: "jit",
	purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ["Roboto"],
		},
		extend: {
			backgroundImage: theme => ({
				"wave-1": "url('/assets/bg/wave-1.svg')",
				"wave-2": "url('/assets/bg/wave-2.svg')",
			}),
			backgroundColor: theme => ({
				primary: "#212121",
				secondary: "#c92a2a",
			}),
			textColor: {
				primary: "#c92a2a",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/aspect-ratio")],
};
