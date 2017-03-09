import React, { Component } from 'react';
import './App.css';

import MainNav from './MainNav';

class App extends Component {
  render() {
    return (
      <div className="app">
        <MainNav />
        { this.props.children }
      </div>
      );
  }
}

export default App;
