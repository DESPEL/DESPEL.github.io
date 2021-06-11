import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { Home, AboutMe, MyWork, ContactMe, Blog } from './pages'
import { NavBar } from './components'

import './style.css'

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <div className='content'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={AboutMe} />
          <Route exact path='/mywork' component={MyWork} />
          <Route exact path='/contact' component={ContactMe} />
          <Route exact path='/blog' component={Blog} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
