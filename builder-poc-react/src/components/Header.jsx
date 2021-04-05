import React from 'react';
import { builder, BuilderComponent } from '@builder.io/react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

builder.init('3c7e390ebd25467aa0bf62675258be66');

export function Header(props) {
  const { backgroundColor } = props;

  return <>
  <BuilderComponent
    model="header"
    />
    <section style={{ backgroundColor: backgroundColor }}>
      <Router>
        <Link to="/">Home</Link>
          <br></br>
        <Link to="/display-page">Display Page</Link>
      </Router>
    </section>
  </>
}
