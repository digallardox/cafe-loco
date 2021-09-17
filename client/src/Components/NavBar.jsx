import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar(){
    return (
    <div>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to={"/"}>CAFÉ LOCO</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
        <Nav.Link as={Link} to={"/rank"}>Ranking</Nav.Link>
        <Nav.Link as={Link} to={"/add"}>Add Coffee</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    )
}

export default NavBar;