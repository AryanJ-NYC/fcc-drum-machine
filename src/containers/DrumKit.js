import React, { Component } from 'react';
import { Column, Columns } from 'bloomer';
import DrumPad from '../components/DrumPad';
import drumData from '../data/drums.json';

export default class DrumKit extends Component {
  renderDrumPads() {
    return drumData.map(drum => (
      <Column isSize='1/3' key={drum.key}>
        <div className="has-text-centered">
          <DrumPad drum={drum}></DrumPad>
        </div>
      </Column>
    ));
  }

  render() {
    return (
      <Columns id="display" isCentered isMultiline>
        {this.renderDrumPads()}
      </Columns>
    );
  }
}
