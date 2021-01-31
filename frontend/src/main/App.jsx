import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Menu from '../template/Menu'
import Content from './Content'

export default () => (
  <div className="container">
    <Router>
      <Menu />
      <Content />
    </Router>
  </div>
)
