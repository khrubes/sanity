import React, { Component } from 'react';
import axios from 'axios';
import style from './style';

// creates a new game in the DB and displays the game id for others to join on the screen
class NewGame extends Component {

   constructor(props) {
    super(props);
    this.state = {
      gameId: "No game yet",
    };
    // bind this to other functions
  }

  render() {
    return (
      <div>
        New Game <br />

       Game ID: {this.state.gameId}
      </div>
    )
  }

  componentDidMount() {
    // make post request to /api/newgame
    // get game id response & display it
    console.log("newgame component did mount");
    console.log(this);

    axios.post(`${this.props.apiURL}/newgame`)
      .then(function (response) {
        console.log(response);
        this.setState({gameId: response});
        // create new player ....
      })
      .catch(function (error) {
        console.log(error); 
      });
  }

  componentWillUnmount() { 
    //polling stuff
  }

}

export default NewGame;