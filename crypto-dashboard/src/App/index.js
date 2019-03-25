import React, { Component } from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import styled, { css } from 'styled-components';
import AppLayout from './AppLayout';

class App extends Component {
  render() {
    return (
      <div>
        <AppLayout>
          <WelcomeMessage />
        </AppLayout>
      </div>

    );
  }
}

export default App;
