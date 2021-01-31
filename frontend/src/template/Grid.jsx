import React from 'react'

function toCssClasses(numbers) {
  const col = numbers ? numbers.split(' ') : []
  let classes = ''

  if (col[0]) classes += `col-xs-${col[0]}`
  if (col[1]) classes += ` col-sm-${col[1]}`
  if (col[2]) classes += ` col-md-${col[2]}`
  if (col[3]) classes += ` col-lg-${col[3]}`

  return classes
}

export default ({ cols, children }) => {
  const gridClasses = toCssClasses(cols || 12)

  return <div className={gridClasses}>{children}</div>
}
