import React, { Component } from 'react';
import { Container } from 'bloomer';
import DrumKit from './containers/DrumKit';
import Footer from './components/Footer';
import 'bulma/css/bulma.css'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Container id="main-container">
        <DrumKit />
        <Footer />
      </Container>
    );
  }
}
