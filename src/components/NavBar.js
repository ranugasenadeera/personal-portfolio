import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import icons8 from '../assets/img/icons8.svg';
import icons9 from '../assets/img/icons9.svg';
import icons10 from '../assets/img/icons10.svg';
import icons11 from '../assets/img/icons11.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

const LogoSVG = ({ isTabletView, isMobileView }) => {
  if (isTabletView) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" width="180" height="36">
        <text x="40" y="35" fontFamily="Verdana" fontSize="32" fill="#fff" textAnchor="middle">RS</text>
      </svg>
    );
  } else if (isMobileView) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" width="200" height="40">
        <text x="125" y="35" fontFamily="Verdana" fontSize="24" fill="#fff" textAnchor="middle">RanugaSenadeera</text>
      </svg>
    );
  } else {
    // Default logo for other views (not tablet or mobile)
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" width="200" height="40">
        <text x="125" y="35" fontFamily="Verdana" fontSize="24" fill="#fff" textAnchor="middle">RanugaSenadeera</text>
      </svg>
    );
  }
};

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0); // State to hold navbar height
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if menu is open
  const [isTabletView, setIsTabletView] = useState(false); // State to track tablet view
  const [isMobileView, setIsMobileView] = useState(false); // State to track mobile view

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsTabletView(screenWidth >= 768 && screenWidth <= 1024);
      setIsMobileView(screenWidth < 768);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // Initial check for tablet and mobile view

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Calculate navbar height on load
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <div className="logo-container">
              <LogoSVG isTabletView={isTabletView} isMobileView={isMobileView} />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className={isMenuOpen ? 'show' : ''}>
            <Nav className={isTabletView ? 'mx-auto' : 'ms-auto'}>
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://linkedin.com/in/ranugasenadeera"><img src={icons8} alt="" /></a>
                <a href="https://github.com/ranugasenadeera"><img src={icons9} alt="" /></a>
                <a href="mailto:senadeerakrg@gmail.com"><img src={icons10} alt="" /></a>
                <a href="https://www.instagram.com/ranuga_geeneth"><img src={icons11} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd rounded-pill"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Content below the navbar */}
      <div style={{ paddingTop: isMenuOpen ? `${navbarHeight}px` : '0' }}>
        {/* Your main content goes here */}
      </div>
    </Router>
  );
};
