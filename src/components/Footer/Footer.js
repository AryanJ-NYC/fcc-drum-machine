import React from 'react';
import { Column, Columns, Container, Footer, Icon } from 'bloomer';

export default function AppFooter() {
  return (
    <Footer>
      <Container>
        <Columns isCentered isVCentered>
          <Column>Made for demonstration purposes by Aryan Jabbari.</Column>
          <Column>
            <a href="https://github.com/AryanJ-NYC" rel="noopener noreferrer" target="_blank">
              <Icon isSize="large" className="fab fa-github fa-3x"></Icon>
            </a>
            <a href="https://www.linkedin.com/in/aryanjabbari/" rel="noopener noreferrer" target="_blank">
              <Icon isSize="large" className="fab fa-linkedin fa-3x"></Icon>
            </a>
          </Column>
        </Columns>
      </Container>
    </Footer>
  );
}
