import { AppBar, Toolbar, Typography } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import React from 'react'

export default function Nav() {
  return (
    
    <AppBar position="sticky">
        <Toolbar>
            <PhotoCameraIcon sx={{mr: 2}}/>
            <Typography variant="body1" noWrap>
                Albun layout
            </Typography>
        </Toolbar>
    </AppBar>

  )
}
