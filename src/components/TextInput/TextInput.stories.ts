import type { Meta, StoryObj } from '@storybook/react';

import TextInput from './TextInput';
import { InputState } from '../utils';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'BasicComponentLibrary/TextInput',
  component: TextInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TextInputWithValidContent: Story = {
  args: {
    type: 'text',
    state: InputState.Valid,
    label: 'Username',
    value: 'johndoe321'
  },
};

export const TextInputWithInvalidContent: Story = {
  args: {
    type: 'text',
    state: InputState.Invalid,
    label: 'Username',
    value: 'asdflkasjdfasdlkfj'
  },
};

export const DisabledTextInput: Story = {
  args: {
    type: 'text',
    state: InputState.Disabled,
    label: 'Username'
  },
};

export const EmailInput: Story = {
  args: {
    type: 'text',
    label: 'Email',
    placeholder: 'someone@example.com'
  },
};

export const UrlInput: Story = {
  args: {
    type: 'text',
    label: 'Url',
    placeholder: 'https://example.com'
  },
};