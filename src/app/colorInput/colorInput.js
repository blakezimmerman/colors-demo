// @flow
import React from 'react';
import Radium from 'radium';
import type { FunctionComponent } from 'radium';
import { inputStyles } from './inputStyles';

type Props = {
    color: number,
    valid: boolean,
    updateColor: (event: SyntheticInputEvent) => void
};

const errorText = valid =>
  <p style={inputStyles.errorText(valid)}>
    Invalid hex color entered
  </p>;

const ColorInput: FunctionComponent<Props, {}> = (props: Props) => (
  <div style={inputStyles.inputContainer}>
    <label style={inputStyles.label}>
      {props.color === 1 ?
        'Enter a hex color:' :
        'Enter another hex color:'
      }
      <input
        type='text'
        id={props.color === 1 ? 'color1' : 'color2'}
        key={props.color}
        style={inputStyles.input}
        onChange={props.updateColor} />
      {errorText(props.valid)}
    </label>
  </div>
);

export default Radium(ColorInput);
