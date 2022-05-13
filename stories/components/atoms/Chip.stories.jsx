import Chip from "../../../src/shared/components/atoms/Chip";

export default {
  title: "Components/atoms/Chip",
  component: Chip,
};

const Template = (args) => <Chip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...Primary.args,
  inverted: false,
  href: "",
  onClick: () => null,
};
