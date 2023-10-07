import fs from 'fs';
import Mustache from 'mustache';


const INDEX_TEMPLATE = (() => {
  return `export { default as {{componentName}} } from './{{componentName}}'`
})();

const COMPONENT_TEMPLATE = (() => {
  return `
import React from "react";

interface I{{componentName}}Props {

}

const {{componentName}} = (props: I{{componentName}}Props) => {
  return (
    <>
      <h1>{{componentName}}</h1>
    </>
  );

};

export default {{componentName}};
  `
})();

const STORIES_TEMPLATE = (() => {
  return `
import type { Meta, StoryObj } from '@storybook/react';

import {{componentName}} from './{{componentName}}';
import { InputState } from '../utils';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'BasicComponentLibrary/{{componentName}}',
  component: {{componentName}},
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof {{componentName}}>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const First{{componentName}}: Story = {
  args: {
  },
};
  `;
})();

const TEST_TEMPLATE = (() => {
  return `
import React from 'react';
import { render } from '@testing-library/react';

import {{componentName}} from './{{componentName}}';

describe("Nav", () => {
  test("", () => {
    render(
      <{{componentName}} />
    );
  } );
});
  `;
})();

const main = (args) => {

  const componentName = args[0]

  if (!componentName) {
    console.error('You must provide a component name')
    return
  }

  const baseDir = './src/components'

  fs.mkdirSync(`${baseDir}/${componentName}`)

  const index = Mustache.render(INDEX_TEMPLATE, { componentName })
  const component = Mustache.render(COMPONENT_TEMPLATE, { componentName })
  const stories = Mustache.render(STORIES_TEMPLATE, { componentName })
  const test = Mustache.render(TEST_TEMPLATE, { componentName })

  fs.writeFileSync(`${baseDir}/${componentName}/index.ts`, index)
  fs.writeFileSync(`${baseDir}/${componentName}/${componentName}.tsx`, component)
  fs.writeFileSync(`${baseDir}/${componentName}/${componentName}.stories.tsx`, stories)
  fs.writeFileSync(`${baseDir}/${componentName}/${componentName}.test.tsx`, test)

}

main(process.argv.slice(2))

