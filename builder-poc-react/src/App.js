import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DisplayPage } from './pages/DisplayPage.jsx';
import CatchAllPage from './pages/CatchAllPage.jsx';
import { LandingPage } from './pages/LandingPage.jsx';
import { Header } from './components/Header.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/display-page" component={DisplayPage} />
          <Route component={CatchAllPage} />
          {/* <Route render={({ location }) => <CatchAllPage key={location.key} />} /> */}
        </Switch>
      </Router>
    </>
  )
}
