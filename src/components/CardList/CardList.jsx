import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import CardItem from '../CardItem/CardItem'

export default function CardList() {

  const cards = [...new Array(10)]  

  return (
    <Container  maxWidth={'md'} >
        <Grid container spacing={2} sx={{justifyContent: {xs: 'center', sm: 'flex-start'}}}>
            {
                cards.map((_, index) => (
                    <Grid key={index} item xs={8} sm={6} md={4}  sx={{maxWidth: '316px'}}>
                        <CardItem/>        
                    </Grid>
                ))
            }
        </Grid>
    </Container>
  )
}
