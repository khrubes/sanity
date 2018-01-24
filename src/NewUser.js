import React, { Component } from 'react';
//import style from './style';

// creates a new game in the DB and displays the game id for others to join on the screen
class NewUser extends Component {

  //  constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        New User: ... form
      </div>
    )
  }

  componentDidMount() {
    
    // var that = this;

    // axios.post(`${this.props.apiURL}/newgame`)
    //   .then(function (response) {
    //     console.log(response);
    //     that.setState({gameId: response.data.message});
    //     // create new player ....
    //   })
    //   .catch(function (error) {
    //     console.log(error); 
    //   });
  }

  componentWillUnmount() { 
    //polling stuff
  }

}

export default NewUser;