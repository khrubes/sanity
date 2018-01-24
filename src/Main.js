import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import NewGame from './NewGame'
import NewUser from './NewUser'
import AddPlayerForum from './AddPlayerForum'

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/newgame' render={() => <NewGame apiURL='http://localhost:3001/api/' />} />
      <Route path='/newuser' component={NewUser}/>
      <Route path='/addplayerforum' component={AddPlayerForum}/>
      <Route component={NoMatch}/>
    </Switch>
  </main>
) 

export default Main