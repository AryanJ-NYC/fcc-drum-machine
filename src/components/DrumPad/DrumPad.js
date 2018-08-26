import React, { Component } from 'react';
import { Button } from 'bloomer';
import { AUDIO_FILE_DOMAIN } from '../../data/constants';

export default class DrumPad extends Component {
  constructor(props) {
    super(props);
    const audioSrc = `${AUDIO_FILE_DOMAIN}${props.drum.audioName}.mp3`
    this.audio = new Audio(audioSrc)
  }

  onClick = () => {
    this.audio.play();
    this.props.clickListener(this.props.drum.audioName);
  }

  render() {
    const { key } = this.props.drum;
    return (
      <Button isSize="large" onClick={this.onClick}>{ key }</Button>
    )
  }
}
