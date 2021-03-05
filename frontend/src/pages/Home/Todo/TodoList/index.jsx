import React from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  makeStyles,
} from '@material-ui/core'
import { Delete } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default ({ list }) => {
  const { root } = useStyles()
  const [checked, setChecked] = React.useState([0])

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }
  console.log(list)
  return (
    <List className={root}>
      {list.map((value) => {
        const labelId = `checkbox-list-label-${value.description}`

        return (
          <ListItem
            key={value._id}
            role={undefined}
            button
            onClick={handleToggle(value.description)}
          >
            <ListItemIcon>
              <Checkbox
                checked={checked.indexOf(value.description) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={value.description} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )
      })}
    </List>
  )
}
