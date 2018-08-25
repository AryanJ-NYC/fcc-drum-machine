import React, { Component } from 'react';
import DrumPad from '../components/DrumPad';
import drumData from '../data/drums.json';

export default class DrumKit extends Component {
  renderDrumPads() {
    return drumData.map(drum => <DrumPad id={drum.id} key={drum.id}></DrumPad>);
  }

  render() {
    return (
      <div>
        {this.renderDrumPads()}
      </div>
    );
  }
}
