import React, { useState } from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(2),
  },
}))

export default ({ list, handleRemove, handleEdit }) => {
  const { root } = useStyles()
  const [checked, setChecked] = useState([])
  const [dialog, setDialog] = useState({ id: '', description: '', open: false })

  function handleToggle(value) {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  function openDialog(id, description, open) {
    if (id && description && open) {
      setDialog({ ...dialog, id, description, open })
    }
  }

  function handleChangeInputDialog(event) {
    setDialog({ ...dialog, description: event.target.value })
  }

  function handleClose() {
    setDialog({ ...dialog, open: false })
  }

  return (
    <>
      {list.length !== 0 && (
        <>
          <List className={root}>
            {list.map(({ _id, description }) => (
              <ListItem
                key={_id}
                button
                onClick={() => handleToggle(description)}
              >
                <ListItemIcon>
                  <Checkbox
                    color="primary"
                    checked={checked.indexOf(description) !== -1}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText primary={description} />
                <ListItemSecondaryAction>
                  {checked.includes(description) && (
                    <>
                      <IconButton edge="end" aria-label="edit">
                        <EditIcon
                          onClick={() => openDialog(_id, description, true)}
                        />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete">
                        <Delete onClick={() => handleRemove(_id)} />
                      </IconButton>
                    </>
                  )}
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          <Dialog
            open={dialog.open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            fullWidth
            maxWidth="md"
          >
            <DialogTitle id="form-dialog-title">Editar</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                variant="outlined"
                value={dialog.description}
                type="text"
                fullWidth
                onChange={handleChangeInputDialog}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => handleClose()} color="primary">
                Cancelar
              </Button>
              <Button
                onClick={() => {
                  handleEdit(dialog)
                  handleClose()
                }}
                color="primary"
              >
                Editar
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </>
  )
}
