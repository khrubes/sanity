import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import NewGame from './NewGame'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/newgame' component={NewGame} apiURL='http://localhost:3001/api/'/>
    </Switch>
  </main>
)

export default Main