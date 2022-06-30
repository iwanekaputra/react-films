import { Container, Row, Col, Card, Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";



	
const Navigation = () => {

	return (
		<>
		<Navbar bg="dark" expand="lg" variant="dark">
		  <Container>
		    <Navbar.Brand href="#">Wanfilms</Navbar.Brand>
		    <Navbar.Toggle aria-controls="navbarScroll" />
		    <Navbar.Collapse id="navbarScroll">
		      <Nav
		        className="me-auto my-2 my-lg-0"
		        style={{ maxHeight: '100px' }}
		        navbarScroll
		      >
		        <Nav.Link>
		        	<Link to="/" className="text-decoration-none text-white">Home</Link>
		        </Nav.Link>
		        <Nav.Link>
		    		<Link to="top-rated" className="text-decoration-none text-white">Top Rated</Link>
		        </Nav.Link>
		        <Nav.Link>
		    		<Link to="upcoming" className="text-decoration-none text-white">Upcoming</Link>
		        </Nav.Link>
		      </Nav>
		    </Navbar.Collapse>
		  </Container>
		</Navbar>
		</>
	);
}

export default Navigation;