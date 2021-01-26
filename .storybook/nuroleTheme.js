import { create } from "@storybook/theming/create";

export default create({
	base: "light",

	colorPrimary: "#8FB2BC",
	colorSecondary: "#2F4D55",

	// UI
	appBg: "#EEE",
	appContentBg: "#FFF",
	appBorderColor: "#2F4D55",
	appBorderRadius: 4,

	// Typography
	fontBase: 'OpenSans, "Helvetica Neue"',
	fontCode: "monospace",

	// Text colors
	textColor: "#2F4D55",
	textInverseColor: "rgba(255,255,255,0.9)",

	// Toolbar default and active colors
	barTextColor: "#FFFFFF",
	barSelectedColor: "#2F4D55",
	barBg: "#8FB2BC",

	// Form colors
	inputBg: "white",
	inputBorder: "#2F4D55",
	inputTextColor: "#2F4D55",
	inputBorderRadius: 4,

	brandTitle: "Nurole - Storybook",
	brandUrl: "https://nurole.com",
	brandImage:
		"https://pbs.twimg.com/profile_images/1189568648689664001/1vZWhtXq.jpg",
});
