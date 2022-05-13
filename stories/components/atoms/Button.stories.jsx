import Button from "../../../src/shared/components/atoms/Button";

export default {
  title: "Components/atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { ...Primary.args, inverted: false };
