import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { builder, Builder } from '@builder.io/react';

builder.init('3c7e390ebd25467aa0bf62675258be66');

export function Header(props) {
  const { backgroundColor } = props;

  return <>
    <section style={backgroundColor}>
      <Router>
        <Link to="/">Home</Link>
          <br></br>
        <Link to="/display-page">Display Page</Link>
      </Router>
    </section>
  </>
}
