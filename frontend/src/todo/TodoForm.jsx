import React from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

export default ({
  handleChange,
  handleAdd,
  handleSearch,
  handleClear,
  description,
}) => {
  function keyHandler(e) {
    if (e.key === 'Enter') {
      // eslint-disable-next-line no-unused-expressions
      e.shiftKey ? handleSearch() : handleAdd()
    } else if (e.key === 'Escape') {
      handleClear()
    }
  }
  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          onChange={handleChange}
          onKeyUp={keyHandler}
          value={description}
          type="text"
          placeholder="Adicione uma tarefa"
          id="description"
          className="form-control"
        />
      </Grid>
      <Grid cols="12 3 2">
        <IconButton
          style="primary"
          icon="plus"
          onClick={handleAdd}
        ></IconButton>
        <IconButton
          style="info"
          icon="search"
          onClick={handleSearch}
        ></IconButton>
        <IconButton
          style="default"
          icon="close"
          onClick={handleClear}
        ></IconButton>
      </Grid>
    </div>
  )
}
