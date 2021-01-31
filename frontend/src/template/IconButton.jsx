import React from 'react'

export default ({ hide, style, icon, onClick }) => {
  if (hide) {
    return null
  }

  return (
    <button type="button" className={`btn btn-${style}`} onClick={onClick}>
      <i className={`fa fa-${icon}`}></i>
    </button>
  )
}
