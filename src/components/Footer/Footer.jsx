import { Box, Container, Link, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Box component={'footer'}>
        
        <Typography 
                variant="h6" 
                align='center'
            >
                Footer
        </Typography>

        <Typography 
                variant="subtitle1" 
                align='center'
                component={'p'}
            >
                Something here to give the footer a purpose!
        </Typography>

        <Typography 
                variant="body2" 
                align='center'
            >
                Copyright © 
                <Link href='#'>
                    Your Website
                </Link> 
                2023.
        </Typography>
        
    </Box>
  )
}
