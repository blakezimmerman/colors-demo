// @flow
import React from 'react';
import Radium from 'radium';
import { styles } from './styles';
import ColorInput from './colorInput/colorInput';
import ColorBox from './colorBox/colorBox';

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
    return (
      <div style={styles.app}>
        <h1 style={styles.header}>Colors Demo</h1>
        <ColorInput
          color={1}
          valid={this.state.color1valid}
          updateColor={this.updateColor} />
        <ColorInput
          color={2}
          valid={this.state.color2valid}
          updateColor={this.updateColor} />
        <ColorBox color1={this.state.color1} color2={this.state.color2} />
      </div>
    );
  }
}

export default Radium(App);
