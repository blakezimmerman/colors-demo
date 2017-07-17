// @flow
import React from 'react';
import Radium from 'radium';
import { styles } from './styles';
import ColorBox from './colorBox';

class App extends React.Component {
  state: {
    color1: string,
    color2: string,
    color1valid: boolean,
    color2valid: boolean
  };

  constructor() {
    super();

    this.state = {
      color1: '#FFFFFF',
      color2: '#000000',
      color1valid: true,
      color2valid: true
    };
  }

  updateColor = (event: SyntheticInputEvent): void => {
    const hexPattern = /^#(?:[0-9a-f]{3}){1,2}$/i;

    if (hexPattern.test(event.target.value)) {
      this.setState({ [event.target.id+'valid']: true, [event.target.id]: event.target.value });
    } else {
      this.setState({ [event.target.id+'valid']: false });
    }
  }

  render() {
    const errorText = valid =>
      <p style={styles.errorText(valid)}>
        Invalid hex color entered
      </p>;

    return (
      <div style={styles.app}>
        <h1 style={styles.header}>Colors Demo</h1>
        <div style={styles.inputContainer}>
          <label style={styles.label}>
            Enter a hex color:
            <input
              type="text"
              id="color1"
              key="1"
              style={styles.input}
              onChange={this.updateColor} />
            {errorText(this.state.color1valid)}
          </label>
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>
            Enter another hex color:
            <input
              type="text"
              id="color2"
              key="2"
              style={styles.input}
              onChange={this.updateColor} />
            {errorText(this.state.color2valid)}
          </label>
        </div>
        <div style={styles.colorBoxContainer}>
          <ColorBox color1={this.state.color1} color2={this.state.color2} />
        </div>
      </div>
    );
  }
}

export default Radium(App);
