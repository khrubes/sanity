import React, { Component } from 'react';
import './style.css';
import axios from 'axios';

class JoinGameForum extends Component {
    constructor(props) {
        super(props);
        this.state = { gameCode: '', errorMessage: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ gameCode: event.target.value });
    }

    handleSubmit(event) {
        var that = this;
        axios.get(`${this.props.apiURL}game`, {
            params: {
                gamecode: this.state.gameCode
            }
        })
            .then(function (response) {
                var game = response.data.message[0];

                if (game) {
                    // game found
                    // game.game_id
                    // todo go to adduser page
                    that.setState({ errorMessage: ''});

                    // go to /addplayer and pass the game id
                    that.props.history.push({
                        pathname: '/addplayerforum',
                        state: {
                            game_id: game.game_id,
                        }
                    });

                } else {
                    that.setState({ errorMessage: 'No game found with that code.' });
                }
            })
            .catch(function (error) {
                console.log(error);
                that.setState({ errorMessage: 'No game found with that code.' });
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
                <p>{this.state.errorMessage}</p>
            </div>
        );
    }
}

export default JoinGameForum;