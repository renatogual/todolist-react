/* eslint-disable no-console */
import React, { useState } from 'react'
import { Box, Button, TextField, makeStyles, Tooltip } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { Search, Backspace } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  specialButton: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1),
      minWidth: 0,
      width: '10%',
    },
  },
}))

export default ({
  description,
  handleChange,
  handleAdd,
  handleClear,
  handleSearch,
}) => {
  const { specialButton } = useStyles()
  const [screenWidth, setScreenWidth] = useState()

  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth)
  })

  function keyHandler(e) {
    if (e.key === 'Enter') {
      if (e.shiftKey) handleSearch()
      else handleAdd()
    } else if (e.key === 'Escape') {
      handleClear()
    }
  }

  return (
    <Box display="flex" p={2}>
      <TextField
        value={description}
        size={screenWidth < 600 ? 'small' : 'medium'}
        fullWidth
        id="add"
        label="Adicionar/Pesquisar"
        variant="outlined"
        autoComplete="off"
        onChange={handleChange}
        onKeyUp={keyHandler}
      />
      <Tooltip title="Adicionar" placement="bottom" arrow>
        <Button
          color="primary"
          variant="contained"
          onClick={handleAdd}
          className={specialButton}
        >
          <AddIcon />
        </Button>
      </Tooltip>
      <Tooltip title="Pesquisar" placement="bottom" arrow>
        <Button
          color="primary"
          variant="contained"
          onClick={handleSearch}
          className={specialButton}
        >
          <Search />
        </Button>
      </Tooltip>
      <Tooltip title="Limpar" placement="bottom" arrow>
        <Button
          color="primary"
          variant="contained"
          onClick={handleClear}
          className={specialButton}
        >
          <Backspace />
        </Button>
      </Tooltip>
    </Box>
  )
}
