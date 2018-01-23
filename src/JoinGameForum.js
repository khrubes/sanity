import React, { Component } from 'react';
import './style.css';
import axios from 'axios';

class JoinGameForum extends Component {
    constructor(props) {
      super(props);
      this.state = {gameCode: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({gameCode: event.target.value});
    }
  
    handleSubmit(event) {
     // alert('A game code was submitted: ' + this.state.gameCode);

        // /game & id = code get request ... &gamecode=
        // if successful, -> pass game id + withrouter newuser -> game screen,
        // else, error msg

        //
        axios.get(`${this.props.apiURL}game`, {
            params: {
                gamecode: this.state.gameCode //?
            }
          })
          .then(function (response) {
            console.log(response);
            
          })
          .catch(function (error) {
            console.log(error);
          });
    
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="joinGameForum">
        <b>Join Existing Game</b>
        <form onSubmit={this.handleSubmit}>
          <label>
            Game Code
            <input type="text" value={this.state.gameCode} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }

  export default JoinGameForum;