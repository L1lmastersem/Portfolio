import { useState, useEffect } from 'react'
import './Navbar.css';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a href="#" className="navbar-logo">sp.</a>
      <ul className="navbar-links">
        <li><a href="#" className="nav-link">home</a></li>
        <li><a href="#about" className="nav-link">about</a></li>
        <li><a href="#contact" className="nav-link">contact</a></li>
      </ul>
    </nav>
  );
}
