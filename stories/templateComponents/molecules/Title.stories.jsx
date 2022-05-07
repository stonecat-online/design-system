import Title from "../../../src/shared/templateComponents/molecules/Title";

export default {
  title: "Template Components/molecules/Title",
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = { ...Primary.args, };
