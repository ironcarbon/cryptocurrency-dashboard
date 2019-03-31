import React, { Component } from 'react';
import './App.css';
//import WelcomeMessage from '../Settings/WelcomeMessage';
//import styled, { css } from 'styled-components';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';
import Settings from '../Settings';
import Content from '../Shared/Content';
import Dashboard from '../Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <AppLayout>
          <AppProvider>
            <AppBar />
            <Content>
              <Settings />
              <Dashboard />
            </Content>
          </AppProvider>
        </AppLayout>
      </div>

    );
  }
}

export default App;
