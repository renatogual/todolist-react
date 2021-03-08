/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import api from '../../server/api'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = '/todos'

const initialState = {
  description: '',
  list: [],
}

export default () => {
  const [state, setState] = useState(initialState)

  function refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : ''
    api
      .get(`${URL}?sort=-createdAt${search}`)
      .then((resp) => setState({ ...state, description, list: resp.data }))
  }

  useEffect(() => {
    refresh()
  }, [])

  function handleChange(event) {
    setState({ ...state, description: event.target.value })
  }

  function handleAdd() {
    let isIncluding = false
    const { description } = state

    state.list.forEach((element) => {
      if (description === element.description) isIncluding = true
    })

    if (!isIncluding && description) {
      api.post(URL, { description }).then(() => refresh())
    }
  }

  function handleRemove(id) {
    api.delete(`${URL}/${id}`).then(() => refresh(state.description))
  }

  function handleEdit(dialog) {
    api
      .put(`${URL}/${dialog.id}`, {
        ...dialog,
        description: dialog.description,
      })
      .then(() => refresh(state.description))
  }

  // function handleSearch() {
  //   refresh(state.description)
  // }

  function handleClear() {
    refresh()
  }

  return (
    <>
      <TodoForm
        description={state.description}
        handleChange={handleChange}
        handleAdd={handleAdd}
        handleClear={handleClear}
      />
      <TodoList
        list={state.list}
        handleRemove={handleRemove}
        handleEdit={handleEdit}
      />
    </>
  )
}
