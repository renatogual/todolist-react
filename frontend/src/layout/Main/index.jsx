import { Box, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  root: {
    flex: 1,
  },
})

function Main({ children }) {
  const { root } = useStyles()

  return (
    <Box component="main" className={root}>
      {children}
    </Box>
  )
}

export default Main
