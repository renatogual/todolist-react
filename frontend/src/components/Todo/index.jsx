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
    const { description } = state
    api.post(URL, { description }).then(() => refresh())
  }

  function handleRemove(id) {
    api.delete(`${URL}/${id}`).then(() => refresh(state.description))
  }

  // function handleSearch() {
  //   refresh(state.description)
  // }

  // function handleClear() {
  //   refresh()
  // }

  // function handleMarkAsDone(todo) {
  //   api
  //     .put(`${URL}/${todo._id}`, { ...todo, done: true })
  //     .then(() => refresh(state.description))
  // }

  // function handleMarkAsPending(todo) {
  //   api
  //     .put(`${URL}/${todo._id}`, { ...todo, done: false })
  //     .then(() => refresh(state.description))
  // }

  return (
    <div>
      <TodoForm handleChange={handleChange} handleAdd={handleAdd} />
      <TodoList list={state.list} handleRemove={handleRemove} />
    </div>
  )
}