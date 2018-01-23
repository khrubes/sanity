import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import JoinGameForum from './JoinGameForum';
//import style from './style';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Sanity</h1>
        <Link to="/newuser">
          <button type="button">
            new game
          </button>
        </Link>
        <JoinGameForum apiURL='http://localhost:3001/api/'/>
      </div>
    )
  }
}

export default Home;