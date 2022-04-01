import React from 'react';

import { ImageUploader } from 'adk-react-library/image-uploader'

export default {
  title: 'Image Uploader',
  component: ImageUploader,
  argTypes: {
    buttonLabel: 'Erin',
    buttonVariant: {
        control: { type: 'radio' },
        options: ['outlined', 'text', 'string', 'contained'],
    },
    onImageUploaded: { action: 'onImageUploaded' },
  },
};

const Template = (args) => <ImageUploader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    buttonLabel: 'Erin3',
    buttonVariant: 'contained',
    
};

export const Outlined = Template.bind({});
Outlined.args = {
    buttonLabel: 'Erin3',
    buttonVariant: 'outlined',
};
