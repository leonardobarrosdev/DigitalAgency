'use client';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import logo from 'assets/img/navbar-logo.svg';

declare global {
  interface Window {
    bootstrap: {
      ScrollSpy: new (element: Element, options: { target: string; rootMargin: string }) => void;
    };
  }
}

export function Nav() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const navbarTogglerRef = useRef<HTMLButtonElement>(null);

  // Navbar shrink function
  const navbarShrink = () => {
    if (!navbarRef.current) return;
    
    if (window.scrollY === 0) {
      navbarRef.current.classList.remove('navbar-shrink');
    } else {
      navbarRef.current.classList.add('navbar-shrink');
    }
  };

  // Handle responsive nav item clicks
  const handleNavItemClick = () => {
    if (!navbarTogglerRef.current) return;
    
    if (window.getComputedStyle(navbarTogglerRef.current).display !== 'none') {
      navbarTogglerRef.current.click();
    }
  };

  useEffect(() => {
    // Initial navbar shrink check
    navbarShrink();

    // Add scroll event listener
    window.addEventListener('scroll', navbarShrink);

    // Initialize Bootstrap ScrollSpy
    if (navbarRef.current && typeof window !== 'undefined' && window.bootstrap) {
      new window.bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        rootMargin: '0px 0px -40%',
      });
    }

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', navbarShrink);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" ref={navbarRef}>
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          <Image src={logo} alt="..." />
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarResponsive" 
          aria-controls="navbarResponsive" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          ref={navbarTogglerRef}
        >
          Menu
          <i className="fas fa-bars ms-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={handleNavItemClick}>Services</a>
            </li>
            <li className="nav-item btn-group">
              <a className="nav-link btn" href="#portfolio" onClick={handleNavItemClick}>Portfolio</a>
              <button 
                type="button" 
                className="btn btn-outline-warning dropdown-toggle dropdown-toggle-split" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Social Network</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleNavItemClick}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team" onClick={handleNavItemClick}>Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleNavItemClick}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};