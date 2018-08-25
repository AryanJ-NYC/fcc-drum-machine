import React, { Component } from 'react';
import { Container } from 'bloomer';
import DrumKit from './containers/DrumKit';
import 'bulma/css/bulma.css'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Container>
        <DrumKit />
      </Container>
    );
  }
}
