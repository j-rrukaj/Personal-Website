import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';
import * as Ai from "react-icons/ai"

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const switchTheme = () => {
    setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark");
  };

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

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("site-theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("site-theme", theme);
    const themeColor = theme === "light" ? "#f3efe6" : "#0c1018";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", themeColor);
  }, [theme]);

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
          <button
            type="button"
            className="theme-toggle"
            onClick={switchTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Ai.AiOutlineBulb /> : <Ai.AiOutlineMoon />}
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
        </nav>
      </div>
    </header>
);
}
