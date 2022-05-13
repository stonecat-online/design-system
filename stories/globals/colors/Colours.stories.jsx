import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCssColours } from "../../../src/utils/getCssVars";

const Wrapper = styled.div`
  display: inline-block;
  height: 150px;
  width: 150px;
  background-color: ${({ colour }) => colour};
  border: 1px solid black;
  margin: 10px;
  border-radius: var(--bradius);
`;

const ColourBox = () => {
  const [colours, setColours] = useState([]);

  useEffect(() => {
    setColours(getCssColours());
  }, []);

  return (
    <>
      {colours.map((colour) => (
        <Wrapper colour={colour}></Wrapper>
      ))}
    </>
  );
};

export default {
  title: "Globals/Colours",
  component: ColourBox,
};

const Template = (args) => <ColourBox {...args} />;

export const Primary = Template.bind({});
Primary.args = { ...Primary.args, inverted: false };
