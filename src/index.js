// @flow
import React from 'react';
import { render } from 'react-dom';
import { StyleRoot } from 'radium';
import App from './app/app';

render(
  <StyleRoot>
    <App/>
  </StyleRoot>,
  document.getElementById('root')
);
