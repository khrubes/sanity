import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import style from './style';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Sanity</h1>
        <Link to="/newgame">
          <button type="button">
            new game
          </button>
        </Link>
      </div>
    )
  }
}

export default Home;