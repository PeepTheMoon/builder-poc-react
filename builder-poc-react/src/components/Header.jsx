import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { builder, BuilderComponent } from '@builder.io/react';

builder.init('3c7e390ebd25467aa0bf62675258be66');

export function Header() {
return <>
    <h1>This is the header with nav links</h1>

    <Router>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="display-page">Display Page</Link>
    </Router>

    <BuilderComponent
    model="header"
    // contentLoaded={props.content}
    />
  </>
}
  

