import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function MarketCard(props) {
 
  return (
    <div data-aos="fade-up">
       <Card sx={{ maxWidth: 345, p:1, br:"30px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://www.serac-group.com/wp-content/uploads/2019/09/Parts.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant = "contained" size ="large">Buy</Button>
        <Button size="medium">Learn More</Button>
      </CardActions>
    </Card>
      
    </div>
  );
}

export default MarketCard;