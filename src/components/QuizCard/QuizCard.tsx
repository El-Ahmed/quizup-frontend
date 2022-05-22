import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";


function QuizCard() {

  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' , width: '100%'}}>

        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" textAlign="left">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" textAlign="left">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pr: 1, pb: 1 , justifyContent: 'right'}}>
          <Button aria-label="previous">
            Details
          </Button>
        </Box>
      </Box>

    </Card>

  );

}

export default QuizCard;