import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'BasicComponentLibrary/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Primary',
    type: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    type: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary',
    type: 'tertiary',
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger',
    type: 'danger',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning',
    type: 'warning',
  },
};

export const Success: Story = {
  args: {
    label: 'Success',
    type: 'success',
  },
};

export const Info: Story = {
  args: {
    label: 'Info',
    type: 'info',
  },
};

export const Light: Story = {
  args: {
    label: 'Light',
    type: 'light',
  },
};

export const Dark: Story = {
  args: {
    label: 'Dark',
    type: 'dark',
  },
};

export const Link: Story = {
  args: {
    label: 'Link',
    type: 'link',
  },
};

export const None: Story = {
  args: {
    label: 'None',
    type: 'none',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

export const ExtraSmall: Story = {
  args: {
    label: 'Extra Small',
    size: 'xs',
  },
};

export const Small: Story = {
  args: {
    label: 'Small',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    label: 'Extra Large',
    size: 'xl',
  },
};

export const WithTooltip: Story = {
  args: {
    label: 'With Tooltip',
    tooltip: 'This is a tooltip',
  },
};

export const WithClickHandler: Story = {
  args: {
    label: 'With Click Handler',
    onClick: () => alert('Clicked!'),
  },
};

