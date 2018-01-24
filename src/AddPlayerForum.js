import React, { Component } from 'react';
import './style.css';
import axios from 'axios';

class AddPlayerForum extends Component {
  constructor(props) {
    super(props);
    this.state = { playerName: '', errorMessage: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ playerName: event.target.value });
  }

  handleSubmit(event) {

    event.preventDefault();
    // make sure player name not already in the game
    // if it is, error message,
    // else, write player to game obj /game/addplayer 
    // -> go to game wait screen
    console.log("handlesubmit");

    var gameID = this.props.history.location.state.game_id;
    var apiURL = this.props.history.location.state.apiURL;
    var that = this;

    axios.get(`${apiURL}game`, {
      params: {
        gamecode: gameID
      }
    })
      .then(function (response) {
        var game = response.data.message[0];
        if (game) {
          if (game.players.includes({
            player_name: this.state.playerName,
          })) {
            // a player with this name has already joined this game... test
            that.setState({ errorMessage: 'Someone with the name ' + this.state.playerName + ' has already joined ' + gameID });
          } else {

            // add the player to the game

            // go to start screen
            
          } 
        } else {
          that.setState({ errorMessage: 'Error' });
        }
      })
      .catch(function (error) {
        console.log(error);
        that.setState({ errorMessage: 'Error' });
      });


  }

  render() {
    return (
      <div>
        <h4>Player Name</h4>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.playerName} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>{this.state.errorMessage}</p>
      </div>
    );
  }
}

export default AddPlayerForum;