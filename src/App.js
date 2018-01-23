import React, { Component } from 'react';
import Navbar from './Navbar';
import Main from './Main';
//import style from './style';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Main />
            </div>
        )
    }
}

export default App;