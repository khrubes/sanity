import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import NewGame from './NewGame'
import NewUser from './NewUser'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/newgame' render={() => <NewGame apiURL='http://localhost:3001/api/' />} />
      <Route path='/newuser' component={NewUser}/>
      <Route component={NoMatch}/>
    </Switch>
  </main>
)

const NoMatch = ({ location }) => (
    <div>
      <h3>No match for <code>{location.pathname}</code></h3>
    </div>
  )
  

export default Main