import Card from "../../../src/shared/components/molecules/Card";

export default {
  title: "Components/molecules/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...Primary.args,
  h1: "The wind down the lane",
  h2: "On a bench, on a street",
  p: "",
  imgSrc:
    "https://images.pexels.com/photos/3906112/pexels-photo-3906112.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  inverted: true,
  bg: "black",
};
