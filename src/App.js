import React, { Component } from 'react';
import Navbar from './Navbar';
import Page from './Page';
import style from './style';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Page />
      </div>
    )
  }
}

export default App;