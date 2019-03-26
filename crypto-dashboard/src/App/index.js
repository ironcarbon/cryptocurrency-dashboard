import React, { Component } from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import styled, { css } from 'styled-components';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';

class App extends Component {
  render() {
    return (
      <div>
        <AppLayout>
          <AppProvider>
            <AppBar />
            <WelcomeMessage />
          </AppProvider>
        </AppLayout>
      </div>

    );
  }
}

export default App;
