const TextDisplay = ({ h1, h2, b1, b2 }) => (
  <div>
    <h1>{h1}</h1>
    <h2>{h2}</h2>
    <p>{b1}</p>
    <small>{b2}</small>
  </div>
);

const Template = (args) => <TextDisplay {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  ...Primary.args,
  h1: "The wind down the lane",
  h2: "On a bench, on a street",
  b1: "The standard body text",
  b2: "This is your smaller text",
};

export default {
  title: "Globals/Text",
  component: TextDisplay,
};
