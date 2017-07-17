// @flow
import React from 'react';
import Radium from 'radium';
import type { FunctionComponent } from 'radium';
import { boxStyles } from './boxStyles';

type Props = {
    color1: string,
    color2: string
};

const ColorBox: FunctionComponent<Props, {}> = (props: Props) => (
  <div style={boxStyles.colorBoxContainer}>
    <div style={boxStyles.colorBox(props.color1, props.color2)}>
      Hover Over Me!
    </div>
  </div>
);

export default Radium(ColorBox);
