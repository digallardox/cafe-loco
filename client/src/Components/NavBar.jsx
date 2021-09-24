import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar(){
    return (
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to={"/"}>CAFÉ LOCO</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
        <Nav.Link as={Link} to={"/rank"}>Rank</Nav.Link>
        <Nav.Link as={Link} to={"/add"}>Submit</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
  </Navbar>
    )
}

export default NavBar;