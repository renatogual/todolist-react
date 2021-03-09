/* eslint-disable no-unused-vars */
import React from 'react'
import { Box, Button, TextField, makeStyles, Tooltip } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { Search, Backspace } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingRight: theme.spacing(2),
  },
  marginRight: {
    marginRight: theme.spacing(2),
  },
}))

export default ({
  description,
  handleChange,
  handleAdd,
  handleClear,
  handleSearch,
}) => {
  const { root, marginRight } = useStyles()

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
        className={root}
        fullWidth
        id="add"
        label="Adicionar / Pesquisar"
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
          className={marginRight}
        >
          <AddIcon />
        </Button>
      </Tooltip>
      <Tooltip title="Pesquisar" placement="bottom" arrow>
        <Button
          color="primary"
          variant="contained"
          onClick={handleSearch}
          className={marginRight}
        >
          <Search />
        </Button>
      </Tooltip>
      <Tooltip title="Limpar" placement="bottom" arrow>
        <Button color="primary" variant="contained" onClick={handleClear}>
          <Backspace />
        </Button>
      </Tooltip>
    </Box>
  )
}
