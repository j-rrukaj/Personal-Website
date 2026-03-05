import React from 'react';
import './Footer.css';


function Copyright() {
  return (
    <p className="footer-copy">Copyright © JR {new Date().getFullYear()}</p>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <h2>John Rrukaj</h2>
        <Copyright />
    </footer>
  )
}
