import React from 'react';
import { render } from '@testing-library/react';

import TextInput from './TextInput';

describe("Nav", () => {
  test("", () => {
    render(
      <TextInput onChange={value => console.log(value)} />
    );
  } );
});