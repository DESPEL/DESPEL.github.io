import React from 'react'
import {
  Grid
} from '@material-ui/core'
import {
  makeStyles
} from '@material-ui/core/styles'

import ProjectCard from './projectCard'

const useStyles = makeStyles({
  projectGrid: {
    marginTop: '10vh',
  },
})

function getProjectCards(projects) {
  let cards = []
  projects.forEach((project, index) => {
    cards.push(
      <Grid item xs={12} sm={6} md={4} key={`project-card-${index}`}>
        <ProjectCard
          {...project}
        ></ProjectCard>
      </Grid>
    )
  })
  return cards
}

export default function ProjectContainer(props) {
  const classes = useStyles()
  
  const projects = props.projects == undefined ? [] : props.projects
  return (
    <Grid className={classes.projectGrid} container spacing={2} justify="center">
      {getProjectCards(projects)}
    </Grid>
  )
}

{/* <Grid item xs={12} sm={6} md={4}>
<ProjectCard
  thumbnail="https://i.pximg.net/img-original/img/2020/08/08/19/54/07/83531968_p0.jpg"
  title="Test component"
  description="adlfa sdfas dfa sdv asdv asdvasdv asdv asdvasd vasdva sdva sdv asdv asd vas dv asdv "
  url="https://despel.dev/coding-speedruns/1%20counter/"
></ProjectCard>
</Grid> */}