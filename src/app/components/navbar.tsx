"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link href="/" onClick={closeMenu}>MySite</Link>
        </div>
        
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={isOpen ? 'bar open' : 'bar'}></div>
          <div className={isOpen ? 'bar open' : 'bar'}></div>
          <div className={isOpen ? 'bar open' : 'bar'}></div>
        </div>
        
        {/* Navbar Links */}
        <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
          <li><Link href="/fun-facts" onClick={closeMenu}>Fun Facts</Link></li>
          <li><Link href="/jokes" onClick={closeMenu}>Funny Jokes</Link></li>
          <li><Link href="/riddle" onClick={closeMenu}>Riddles</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
