import React from 'react';


import { ButtonComponent as Button, buttonVariant, buttonSize, buttonSx } from 'adk-react-library/Button'
import 'adk-react-library/Button/dist/index.css'

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => 
<Button 
  {...args} 
  onClick={() => alert("Button Clicked")}
  log={() => console.log("button click logs")}
/>;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const TextButton = Template.bind({});
TextButton.args = {
  children: 'Text Button',
  variant: buttonVariant.text

};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  children: 'Outlined Button',
  variant: buttonVariant.outlined
  
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  children: 'Large Button',
  size: buttonSize.large,
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  children: 'Medium Button',
  size: buttonSize.medium,
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  children: 'Small Button',
  size: buttonSize.small,
};

export const CustomStyleButton = Template.bind({});
CustomStyleButton.args = {
  children: 'Custom Button',
  sx: buttonSx.gray,
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  children: 'Disabled Button',
  disabled: true
}