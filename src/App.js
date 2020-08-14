import React from 'react';
import logo from './logo.svg';

import {
  Container, CssBaseline, ThemeProvider
} from '@material-ui/core'
import {
  createMuiTheme
} from '@material-ui/core/styles'

import './App.css';

import ProjectContainer from './components/projectContainer'

const projects = [
  {
    title: 'Counter',
    description: '',
    url: 'https://despel.github.io/coding-speedruns/1%20counter/',
    source:'https://github.com/DESPEL/coding-speedruns/tree/master/1%20counter'
  },
  {
    title: 'Random color changer',
    description: '',
    url: 'https://despel.github.io/coding-speedruns/2%20random_color',
    source:'https://github.com/DESPEL/coding-speedruns/tree/master/2%20random_color'
  },
  {
    title: 'Hardcoded reviews',
    description: '',
    url: 'https://despel.github.io/coding-speedruns/3%20hardcoded_reviews',
    source:'https://github.com/DESPEL/coding-speedruns/tree/master/3%20hardcoded_reviews'
  },
  {
    title: 'Navbar',
    description: '',
    url: 'https://despel.github.io/coding-speedruns/4%20navbar',
    source:'https://github.com/DESPEL/coding-speedruns/tree/master/4%20navbar'
  },
  {
    title: 'Sidebar',
    description: '',
    url: 'https://despel.github.io/coding-speedruns/5%20sidebar',
    source:'https://github.com/DESPEL/coding-speedruns/tree/master/5%20sidebar'
  },
]

const theme = createMuiTheme({
  
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <ProjectContainer
            projects={projects}
          />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
