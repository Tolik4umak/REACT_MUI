import { Box, Button, Card, CardContent, CardMedia, Typography, CardActions } from '@mui/material'
import React from 'react'

export default function CardItem() {
  return (
    <Card sx={{ maxWidth: 345 }}> 
      <CardMedia
        sx={{ height: 140 }}
        image="https://source.unsplash.com/random?wallpapers"
        component={'img'}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="p">
            Heading
        </Typography>
        <Typography variant="body2" color="text.secondary">
            This is a media card. You can use this section to describe the content.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
