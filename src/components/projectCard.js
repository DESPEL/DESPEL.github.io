import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { CardActionArea, CardMedia, CardContent, Typography, Button, CardActions } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    maxHeight: 150,
    overflow: 'hidden',
  },
})



export default function ProjectCard(props) {

  const classes = useStyles()

  const openProjectPage = () => {
    console.log(props.url)
    window.location.href = 'https://despel.dev/coding-speedruns/1%20counter/'
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={openProjectPage}>
        <CardMedia
          className={classes.media}
          component="iframe"
          src='https://despel.dev/coding-speedruns/1%20counter/'
          title={props.title}></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}P
        </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">Open</Button>
        <Button size="small" color="primary">View Source</Button>
      </CardActions>
    </Card>)
}