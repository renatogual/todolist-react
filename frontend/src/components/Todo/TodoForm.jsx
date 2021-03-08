/* eslint-disable no-unused-vars */
import React from 'react'
import { Box, Button, TextField, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingRight: theme.spacing(2),
  },
}))

export default ({ description, handleChange, handleAdd, handleClear }) => {
  const { root } = useStyles()

  function keyHandler(e) {
    if (e.key === 'Enter') handleAdd()
    if (e.key === 'Escape') handleClear()
  }

  return (
    <Box display="flex" p={2}>
      <TextField
        value={description}
        className={root}
        fullWidth
        id="add"
        label="Adicionar"
        variant="outlined"
        autoComplete="off"
        onChange={handleChange}
        onKeyUp={keyHandler}
      />
      <Button color="primary" variant="contained" onClick={handleAdd}>
        <AddIcon />
      </Button>
    </Box>
  )
}
