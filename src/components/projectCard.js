import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { CardActionArea, CardMedia, CardContent, Typography, Button, CardActions, Hidden, createMuiTheme } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media_media: {
    width: '1280px',
    height: '768px',
    transform: `scale(${350 / 1280}, ${250 / 768})`,
    transformOrigin: '0 0',
    overflow: 'hidden',
  },
  media_container: {
    maxWidth: 350,
    maxHeight: 200,
    overflow: 'hidden',
  },
  wrap: {
    width: 350,
    height: 250,
  }
})

export default function ProjectCard(props) {

  const classes = useStyles()

  const openProjectPage = () => {
    window.open(props.url, '_blank')
  }

  const openSourcePage = () => {
    window.open(props.source, '_blank')
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={openProjectPage}>
        <div className={classes.wrap}>
          <CardMedia
            classes={{ media: classes.media_media }}
            component="iframe"
            src={props.url}
            title={props.title}></CardMedia>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={openProjectPage} size="small" color="primary">Open</Button>
        <Button onClick={openSourcePage} size="small" color="primary">View Source</Button>
      </CardActions>
    </Card>)
}