import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Todo from '../todo/Todo'
import About from '../about/About'

export default () => (
  <Switch>
    <Route exact path="/">
      <Todo />
    </Route>
    <Route path="/todos">
      <Todo />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="*">
      <Todo />
    </Route>
  </Switch>
)
