import React, { Component } from 'react';
import { Column, Columns, Container, Footer, Icon } from 'bloomer';
import DrumKit from './containers/DrumKit';
import 'bulma/css/bulma.css'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Container id="main-container">
        <DrumKit />
        <Footer>
          <Container>
            <Columns isCentered isVCentered>
              <Column>Made for demonstration purposes by Aryan Jabbari.</Column>
              <Column>
                <a href="https://github.com/AryanJ-NYC" target="_blank"><Icon isSize="large" className="fab fa-github fa-3x"></Icon></a>
                <a href="https://www.linkedin.com/in/aryanjabbari/" target="_blank"><Icon isSize="large" className="fab fa-linkedin fa-3x"></Icon></a>
              </Column>
            </Columns>
          </Container>
        </Footer>
      </Container>
    );
  }
}
