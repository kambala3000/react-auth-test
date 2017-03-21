import React, { Component } from 'react';
import './App.css';

import MainNav from './MainNav';
import FlashMessagesList from './FlashMessagesList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <MainNav />
        <FlashMessagesList />
        { this.props.children }
      </div>
      );
  }
}

export default App;
