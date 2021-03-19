import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './components/Header.jsx';
import { DisplayPage } from './pages/DisplayPage.jsx';
import { Header } from './components/Header.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <h1>Render this app!</h1>
      <Router>
      <Route exact path="/" component={DisplayPage} />
      <Route path="/header" component={Header} />
      {/* <Route path="/header" component={props => <Header {...props} />} /> */}
      </Router>
    </>
  )
}
