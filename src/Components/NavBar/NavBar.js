import Classes from './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux/es/hooks/useSelector';

function NavBar() {
  const counter = useSelector((state) => state.cart.counter)
  return (
    <div className={Classes.box}>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <NavLink className='navigations navbar-brand' style={({isActive}) => {return {fontWeight: isActive ? "bold" : "",color: isActive ? "green" : "black"};}} to='/'>Product App</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className='navigations nav-link' style={({isActive}) => {return {fontWeight: isActive ? "bold" : "",color: isActive ? "green" : "black"};}} to='/Register'>Register</NavLink>
              <NavLink className='navigations nav-link' style={({isActive}) => {return {fontWeight: isActive ? "bold" : "",color: isActive ? "green" : "black"};}} to='/Login'>Login</NavLink>
              <NavLink className='navigations nav-link' style={({isActive}) => {return {fontWeight: isActive ? "bold" : "",color: isActive ? "green" : "black"};}} to='/Cart'><FontAwesomeIcon icon={faCartShopping} /> <sup>({counter})</sup></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;