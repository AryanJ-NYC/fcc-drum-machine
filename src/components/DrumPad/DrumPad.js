import React, { Component } from 'react';
import { Button } from 'bloomer';

export default class DrumPad extends Component {
  render() {
    return (
      <Button className="drum-pad" id={this.props.id}>
        { this.props.id }
      </Button>
    )
  }
}
