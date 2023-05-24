
import { Box, Container, Stack, Typography, Button } from '@mui/material'
  

export default function Main() {

  return (
    <Box sx={{pt: 8, pb: 6}}>
        <Container maxWidth="sm">
            <Typography 
                variant="h2" 
                align='center'
            >
                Album layout
            </Typography>
            <Typography
              variant="h5" 
              align='center'
              paragraph
            >
              Something short and leading about the collection below—its contents, 
              the creator, etc. Make it short and sweet, 
              but not too short so folks don't simply skip over it entirely.
            </Typography>
            <Stack 
              direction="row" 
              spacing={2}
              justifyContent={'center'} 
            >
              <Button variant="contained">
                 main call to action
              </Button>
              <Button variant="outlined">
                secondary action
              </Button>

            </Stack>
        </Container>

    </Box>
  )
}
