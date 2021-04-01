import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export function Header(props) {
  const { backgroundColor } = props;

  return <>
    <section style={{ backgroundColor: backgroundColor }}>
      <Router>
        <Link to="/">Home</Link>
          <br></br>
        <Link to="/display-page">Display Page</Link>
      </Router>
    </section>
  </>
}
