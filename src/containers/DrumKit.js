import React, { createRef, Component } from 'react';
import EventListener from 'react-event-listener';
import { Column, Columns, Title } from 'bloomer';
import DrumPad from '../components/DrumPad';
import drumData from '../data/drums.json';

export default class DrumKit extends Component {
  constructor(props) {
    super(props);

    this.supportedKeys = drumData.map(drum => drum.key).join('');
    // in order to play drum audio on key press,
    // a reference to each DrumPad is stored in an object
    this.drumPadRefs = drumData.reduce((prev, drum) => {
      prev[drum.key] = createRef();
      return prev;
    }, {});
  }

  state = {
    lastPlayedAudioName: '',
  }

  handleKeyDown = (e) => {
    const keyPressed = e.key.toUpperCase();
    if (this.supportedKeys.includes(keyPressed)) {
      this.drumPadRefs[keyPressed].current.onClick();
    }
  }

  setLastPlayedAudioName = (lastPlayedAudioName) => {
    this.setState({ lastPlayedAudioName });
  }

  renderDrumPads = () => {
    return drumData.map(drum => (
      <Column isSize='1/3' key={drum.key}>
        <div className="has-text-centered">
          <DrumPad
            drum={drum}
            ref={this.drumPadRefs[drum.key]}
            clickListener={this.setLastPlayedAudioName}
          />
        </div>
      </Column>
    ));
  }

  render() {
    return (
      <div id="display">
        <EventListener
          target={document}
          onKeyDown={this.handleKeyDown}
        />
        <Columns isCentered isMultiline>
          {this.renderDrumPads()}
        </Columns>
        <Title className="has-text-centered">{ this.state.lastPlayedAudioName }</Title>
      </div>
    );
  }
}
