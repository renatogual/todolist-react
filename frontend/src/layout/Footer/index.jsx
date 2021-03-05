import { Divider, Box, Typography } from '@material-ui/core'
import React from 'react'

function Footer() {
  return (
    <>
      <Divider variant="middle" />
      <Box component="footer" justifyContent="center" display="flex" p={2}>
        <Typography variant="h6" color="textSecondary">
          Footer
        </Typography>
      </Box>
    </>
  )
}

export default Footer
