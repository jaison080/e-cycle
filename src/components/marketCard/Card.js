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
       <Card sx={{ maxWidth: 345,minHeight:"500px", p:1, borderRadius:"30px",display:"flex",justifyContent:"space-evenly",flexDirection:"column" }}>
      <CardMedia
        component="img"
        alt=""
        height="250"
        image="https://fossbytes.com/wp-content/uploads/2017/06/smartphone-camera-teardown.jpg"
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
