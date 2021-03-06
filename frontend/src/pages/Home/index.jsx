import React from 'react'
import {
  Container,
  Box,
  Typography,
  Divider,
  makeStyles,
} from '@material-ui/core'

import Todo from '../../components/Todo'

const useStyles = makeStyles({
  root: {
    height: '100%',
    position: 'relative',
  },
  fab: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: '10px',
    marginRight: '10px',
  },
})

function Home() {
  const { root } = useStyles()
  return (
    <Container maxWidth="lg" className={root}>
      <Box display="flex" p={2}>
        <Typography variant="h3">Cadastro</Typography>
      </Box>
      <Divider variant="middle" />
      <Todo />
    </Container>
  )
}

export default Home
