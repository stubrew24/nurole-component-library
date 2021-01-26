import Button from "../components/Button.vue";

export default {
	title: "Button",
	component: Button,
};

const Template = () => ({
	components: { Button },
	template: "<Button />",
});

export const Primary = Template.bind({});
