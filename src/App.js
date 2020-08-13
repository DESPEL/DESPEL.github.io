import React from 'react';
import logo from './logo.svg';
import './App.css';

import ProjectCard from './components/projectCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ProjectCard
          thumbnail="https://i.pximg.net/img-original/img/2020/08/08/19/54/07/83531968_p0.jpg"
          title="Test component"
          description="adlfa sdfas dfa sdv asdv asdvasdv asdv asdvasd vasdva sdva sdv asdv asd vas dv asdv "
          url="https://despel.dev/coding-speedruns/1%20counter/"
        ></ProjectCard>
      </header>
    </div>
  );
}

export default App;
