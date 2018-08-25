import React, { createRef, Component, Fragment } from 'react';
import EventListener from 'react-event-listener';
import { Column, Columns } from 'bloomer';
import DrumPad from '../components/DrumPad';
import drumData from '../data/drums.json';

export default class DrumKit extends Component {
  constructor(props) {
    super(props);

    // in order to play drum audio on key press,
    // a reference to each DrumPad is stored in an object
    this.drumPadRefs = drumData.reduce((prev, drum) => {
      prev[drum.key] = createRef();
      return prev;
    }, {});
  }

  handleKeyDown = (e) => {
    const keyPressed = e.key.toUpperCase();
    this.drumPadRefs[keyPressed].current.onClick();
  }

  renderDrumPads = () => {
    return drumData.map(drum => (
      <Column isSize='1/3' key={drum.key}>
        <div className="has-text-centered">
          <DrumPad drum={drum} ref={this.drumPadRefs[drum.key]} />
        </div>
      </Column>
    ));
  }

  render() {
    return (
      <Fragment>
        <EventListener
          target={document}
          onKeyDown={this.handleKeyDown}
        />
        <Columns id="display" isCentered isMultiline>
          {this.renderDrumPads()}
        </Columns>
      </Fragment>
    );
  }
}
