import React from 'react';
// import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from 'classnames';

// reactstrap components
import { Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container } from 'reactstrap';
import Logo from '../assets/img/logomamacutfond-min.png';
import iconHeart from '../assets/img/icons/icon-heart.png';
import iconTalk from '../assets/img/icons/iconTalk.png';
import iconWomanHair from '../assets/img/icons/icon-woman-hair.png';
import iconMailSend from '../assets/img/icons/mail-send.png';

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (document.documentElement.scrollTop > 299 || document.body.scrollTop > 299) {
        setNavbarColor('');
      } else if (document.documentElement.scrollTop < 300 || document.body.scrollTop < 300) {
        setNavbarColor('navbar-transparent');
      }
    };

    window.addEventListener('scroll', updateNavbarColor);

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames('fixed-top', navbarColor)} color-on-scroll="300" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand data-placement="bottom" title="Logo" href="">
            <img src={Logo} alt="logo" width="60px" height="60px" />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames('navbar-toggler navbar-toggler', {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse className="justify-content-end" navbar isOpen={navbarCollapse}>
          <Nav navbar>
            <NavItem>
              <NavLink href="#what-is-therapy">
                <img src={iconHeart} alt="heart" /> ¿Que es terapia familiar y de pareja?
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#p_online">
                <img src={iconTalk} alt="text" /> Psicología online
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about-me">
                <img src={iconWomanHair} alt="hair" /> Sobre mí
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#readme">
                <img src={iconMailSend} alt="message" /> Escríbeme
              </NavLink>
            </NavItem>
            {/* Un comentario dentro JSX, esto si servirá :)
                                  <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            */}
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/PsictMagdalenaMontiel"
                target="_blank"
                title="Contactame por facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink data-placement="bottom" href="https://www.instagram.com/" target="_blank" title="">
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            {/*
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.github.com/CreativeTimOfficial?ref=creativetim"
                target="_blank"
                title="Star on GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
            */}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
