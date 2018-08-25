import React, { Component } from 'react';
import './DrumPad.css';

export default class DrumPad extends Component {
  render() {
    return (
      <div className="drum-pad">
        { this.props.id }
      </div>
    )
  }
}
