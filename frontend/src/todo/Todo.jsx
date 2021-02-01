import React, { useState } from 'react'
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

  function refresh() {
    axios
      .get(`${URL}?sort=-createdAt`)
      .then((resp) => setState({ ...state, description: '', list: resp.data }))
  }

  function handleChange(event) {
    setState({ ...state, description: event.target.value })
  }

  function handleAdd() {
    const { description } = state
    axios.post(URL, { description }).then(() => refresh())
  }

  function handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`).then(() => refresh())
  }

  return (
    <div>
      <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
      <TodoForm
        description={state.description}
        handleChange={handleChange}
        handleAdd={handleAdd}
      />
      <TodoList list={state.list} handleRemove={handleRemove} />
    </div>
  )
}
