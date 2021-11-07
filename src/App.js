import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/About'
import ArticlesList from './pages/Articles'
import AllProjects from './pages/AllProjects'
import BlockchainProjects from './content/Blockchain'
import BotProjects from './content/Bots'
import MobileProjects from './content/Mobile'
import WebProjects from './content/Web'
import DataProjects from './content/Analitics'
import SigninPage from './pages/signin'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/aboutme" component={About} exact />
        <Route path="/projects" component={AllProjects} exact />
        <Route path="/blockchain" component={BlockchainProjects} exact />
        <Route path="/bots" component={BotProjects} exact />
        <Route path="/mobile" component={MobileProjects} exact />
        <Route path="/web" component={WebProjects} exact />
        <Route path="/data" component={DataProjects} exact />
        <Route path="/allarticles" component={ArticlesList} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
