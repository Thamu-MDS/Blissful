import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left side: Logo */}
      <a href="/"><div className="logo">
        <img src="https://media-hosting.imagekit.io//09149c8e03024ab7/blissfullogo.png?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZpwNLh3LhiJ-fkhJT5i~9miLK6L~X9gWbjSL0Xz7OzXcm0TUdQ6bXT4uQZel4ioAjJAFxAeGv19-BMFmxpzCauIiQC1SqbSJ3M1OVNVRQmvhGziLrO6Rhf4idK7Y4GkzaehmuuYCEoCInncWI3eEDA2nGumDXZEY~--DpVgyrpGR332MCy1quJz1hAfin0y2KFi2daBQ~hblXdZM4bvwnqdH8PCSWB8AXoC-JxH-fOAWf7RyQRk7uTRNdgTlhebBmek3KYaVYHbUpGdCQyu3YesmsRUgw94u~Rss22YlKCQ4MirsOvbsfJ8oWZSUPE8r94-b3DUkmPzSdsJhPMyPtA__" alt="Logo" className="img1" />
      </div></a>

      {/* Center: Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
        <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
      </ul>

      {/* Right side: Button */}
      <div className="button-container">
        <a href="/contact"><button className="contact-button">Get Started</button></a>
      </div>

      {/* Burger Menu for mobile */}
      <div className={`burger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
