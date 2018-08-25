import React, { Component } from 'react';
import DrumKit from './containers/DrumKit';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div id="display">
        <DrumKit></DrumKit>
      </div>
    );
  }
}
