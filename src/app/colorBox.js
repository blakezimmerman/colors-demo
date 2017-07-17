// @flow
import React from 'react';
import Radium from 'radium';
import type { FunctionComponent } from 'radium';
import { styles } from './styles';

type Props = {
    color1: string,
    color2: string
};

const ColorBox: FunctionComponent<Props, {}> = (props: Props) => (
  <div style={styles.colorBox(props.color1, props.color2)}>
    Hover Over Me!
  </div>
);

export default Radium(ColorBox);
