import React, { useContext } from "react";
import Classes from './NavBar.css';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { LanguageContext } from "./../../Context/Language"
import { ThemeContext } from "./../../Context/Theme"

function NavBar() {
  const counter = useSelector((state) => state.cart.counter) 
  const { contextLanguage, setContextLanguage } = useContext(LanguageContext)
  const { contextTheme, setContextTheme } = useContext(ThemeContext)
  return (
    <div className={Classes.box}>
      <Navbar collapseOnSelect expand="lg" className="">
        <Container>
          <NavLink className='navigations navbar-brand' style={({isActive}) => {return {fontWeight: isActive ? "bold" : "",color: isActive ? "green": contextTheme == "dark" ? "white" : "black"};}} to='/'>Product App</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={contextLanguage == "EN" ? "ms-auto" : "me-auto"}>
              <NavLink className='navigations nav-link' style={({isActive}) => {return {fontWeight: isActive ? "bold" : "",color: isActive ? "green" : contextTheme == "dark" ? "white" : "black"};}} to='/Register'>Register</NavLink>
              <NavLink className='navigations nav-link' style={({isActive}) => {return {fontWeight: isActive ? "bold" : "",color: isActive ? "green" : contextTheme == "dark" ? "white" : "black"};}} to='/Login'>Login</NavLink>
              <NavLink className='navigations nav-link' style={({isActive}) => {return {fontWeight: isActive ? "bold" : "",color: isActive ? "green" : contextTheme == "dark" ? "white" : "black"};}} to='/Cart'><FontAwesomeIcon icon={faCartShopping} /> <sup>({counter})</sup></NavLink>
            </Nav>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className='ms-2'>
                {contextLanguage}
              </Dropdown.Toggle>

              <Dropdown.Menu className='ms-2'>
                <Dropdown.Item onClick={() => setContextLanguage("ar")}>AR</Dropdown.Item>
                <Dropdown.Item onClick={() => setContextLanguage("en")}>EN</Dropdown.Item>
                <Dropdown.Item onClick={() => setContextLanguage("fr")}>FR</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <NavLink className='navigations nav-link ms-3 fs-4 text-success'>
              {contextTheme == "light" ? 
              <FontAwesomeIcon icon={faSun} flip="horizontal" onClick={() => setContextTheme("dark")}/>
              : 
              <FontAwesomeIcon icon={faMoon} flip="horizontal" onClick={() => setContextTheme("light")}/>}
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;