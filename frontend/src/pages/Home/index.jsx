import React from 'react'
import {
  Container,
  Box,
  Typography,
  Divider,
  TextField,
  Fab,
  makeStyles,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

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
  const { root, fab } = useStyles()
  return (
    <Container maxWidth="lg" className={root}>
      <Box display="flex" p={2}>
        <Typography variant="h3">Cadastro</Typography>
      </Box>
      <Divider variant="middle" />
      <Box display="flex" p={2}>
        <TextField
          fullWidth
          id="search"
          label="Pesquisar"
          variant="outlined"
          autoComplete="off"
        />
      </Box>
      <Fab color="primary" aria-label="add" className={fab}>
        <AddIcon />
      </Fab>
    </Container>
  )
}

export default Home
