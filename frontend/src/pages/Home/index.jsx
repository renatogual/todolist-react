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
