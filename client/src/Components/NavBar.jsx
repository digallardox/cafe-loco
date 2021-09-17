import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar(){
    return (
    <div>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">CAFÉ LOCO</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
        <Nav.Link as={Link} to={"/rank"}>Ranking</Nav.Link>
        <Nav.Link as={Link} to={"/new"}>Add Coffee</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    )
}

export default NavBar;