import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';
import * as Ai from "react-icons/ai"

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const changeBackgroundColor = () => {
      setIsScrolled(window.scrollY >= 120);
    };

    changeBackgroundColor();
    document.addEventListener("scroll", changeBackgroundColor);
    return () => {
      document.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);

  return (   
    <header className={`site-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="site-nav-inner">
        <Link className="brand" to="/" onClick={closeMobileMenu}>
          <img className="brand-logo" src="/images/jr-logo.svg" alt="JR logo" />
        </Link>

        <button
          className="menu-toggle"
          onClick={handleClick}
          aria-label="Toggle navigation"
          type="button"
        >
          {click ? <Ai.AiOutlineClose /> : <Ai.AiOutlineMenu />}
        </button>

        <nav className={`nav-menu ${click ? 'active' : ''}`}>
          <Link className="nav-link" onClick={closeMobileMenu} to="/">Home</Link>
          <Link className="nav-link" onClick={closeMobileMenu} to="/resume">Resume</Link>
          <Link className="nav-link" onClick={closeMobileMenu} to="/projects">Projects</Link>
          <Link className="nav-link" onClick={closeMobileMenu} to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
);
}
