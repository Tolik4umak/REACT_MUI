import { Box, Button, Container, Grid, Stack, TextField } from '@mui/material'
import React from 'react'

export default function Form() {
  return (
    <Container maxWidth='md' sx={{py: 4}} >
        <Box component={'form'}>
            <Stack spacing={2}>
                <Stack spacing={2} direction={'row'}>
                    <TextField label="Name" variant='outlined'/>
                    <TextField label="Last Name" variant='outlined'/>
                    <TextField type='email' label="Email" variant='outlined'/>
                </Stack>
                <Stack spacing={2} direction={'column'}>
                    <TextField label="Yuor message" variant='outlined' multiline rows={4}/>
                    <Button variant='contained' sx={{mt: 2}} >send</Button>
                </Stack>
            </Stack>
        </Box>
    </Container>
  )
}
