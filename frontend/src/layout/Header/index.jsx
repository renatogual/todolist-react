import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <AssignmentTurnedInIcon />
        <Typography variant="h6">Lista de tarefas</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
