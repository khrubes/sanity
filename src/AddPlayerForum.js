import React, { Component } from 'react';
import './style.css';
//import axios from 'axios';

class AddPlayerForum extends Component {
    constructor(props) {
      super(props);
      console.log(props);
      this.state = {playerName: '', errorMessage: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({playerName: event.target.value});
    }
  
    handleSubmit(event) {
        // var that = this;
        // axios.get(`${this.props.apiURL}game`, {
        //     params: {
        //         playerName: this.state.playerName
        //     }
        //   })
        //   .then(function (response) {
            
        //     // /addplayer
        //     that.setState({errorMessage: ''});
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //     that.setState({errorMessage: 'Error'});
        //   });
    
      event.preventDefault();
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