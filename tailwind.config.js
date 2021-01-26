module.exports = {
	purge: [
		"./src/**/*.html",
		"./src/**/*.vue",
		"./src/**/*.js",
		"./src/**/*.hbs",
	],
	prefix: "tw-",
	important: true,
	theme: {
		extend: {
			colors: {
				primary: "#A8CCD0",
				"primary-accent": "#478095",
				"primary-light": "#E9F2F3",
				"primary-light-accent": "#F3FCFD",
				neutral: "#EBEAE6",
				"nurole-light": "#ABADAE",
				"nurole-medium": "#465560",
				"nurole-dark": "#333C41",
			},
			screens: {
				xs: "420px",
			},
			maxHeight: {
				"9/10": "90vh",
			},
		},
	},
	variants: {},
	corePlugins: {
		preflight: false,
	},
};
