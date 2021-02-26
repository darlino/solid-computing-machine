import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import youtube from '../../assets/youtube.jpg'
const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={youtube}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3" textAlign="center">
            Darlino
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" textAlign="center">
            Chaîne de cryptographie
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
}