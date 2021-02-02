import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import Menu from '../template/Menu'
import Content from './Content'

export default () => (
  <div className="app">
    <Router>
      <Menu />
      <Content />
    </Router>
  </div>
)
