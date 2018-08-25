import React, { createRef, Component } from 'react';
import { Button } from 'bloomer';
import { AUDIO_FILE_DOMAIN } from '../../data/constants';

export default class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.audioRef = createRef();
    this.audioSrc = `${AUDIO_FILE_DOMAIN}${props.drum.audioName}.mp3`
  }

  onClick = () => {
    this.audioRef.current.play();
    this.props.clickListener(this.props.drum.audioName);
  }

  render() {
    const { audioName, key } = this.props.drum;
    return (
      <div className="drum-pad" id={audioName}>
        <Button onClick={this.onClick}>{ key }</Button>
        <audio className="clip" id={key} ref={this.audioRef} src={this.audioSrc}></audio>
      </div>
    )
  }
}
