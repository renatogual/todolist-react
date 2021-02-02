/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:3003/api/todos'

const initialState = {
  description: '',
  list: [],
}

export default () => {
  const [state, setState] = useState(initialState)

  function refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : ''
    axios
      .get(`${URL}?sort=-createdAt${search}`)
      .then((resp) => setState({ ...state, description, list: resp.data }))
  }

  useEffect(() => {
    refresh()
  }, [])

  function handleChange(event) {
    setState({ ...state, description: event.target.value })
  }

  function handleSearch() {
    refresh(state.description)
  }

  function handleClear() {
    refresh()
  }

  function handleAdd() {
    const { description } = state
    axios.post(URL, { description }).then(() => refresh())
  }

  function handleMarkAsDone(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(() => refresh(state.description))
  }

  function handleMarkAsPending(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(() => refresh(state.description))
  }

  function handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`).then(() => refresh(state.description))
  }

  return (
    <div>
      <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
      <TodoForm
        description={state.description}
        handleChange={handleChange}
        handleAdd={handleAdd}
        handleSearch={handleSearch}
        handleClear={handleClear}
      />
      <TodoList
        list={state.list}
        handleMarkAsDone={handleMarkAsDone}
        handleMarkAsPending={handleMarkAsPending}
        handleRemove={handleRemove}
      />
    </div>
  )
}
