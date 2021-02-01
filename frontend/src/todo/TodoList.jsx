import React from 'react'
import IconButton from '../template/IconButton'

export default ({ list, handleRemove }) => {
  function renderRows() {
    const lista = list || []
    return lista.map((todo) => (
      <tr key={todo._id}>
        <td>{todo.description}</td>
        <td>
          <IconButton
            style="danger"
            icon="trash-o"
            onClick={() => handleRemove(todo)}
          />
        </td>
      </tr>
    ))
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  )
}
