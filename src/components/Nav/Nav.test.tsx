import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import Nav from './Nav';

describe("Nav", () => {
  test("", () => {
    const navItems = {
      "Home": "https://matt-wiley.github.io/#/home",
      "YouTube": "https://www.youtube.com"
    }
    render(
      <MemoryRouter>
        <Nav navItems={navItems}/>
      </MemoryRouter>
    );
  } );
});