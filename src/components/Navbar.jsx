import { Navbar as NB, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  <NB bg="light" expand="lg">
  <Container>
    <NB.Brand as={Link} to={"/"}>CAFÉ LOCO</NB.Brand>
    <NB.Toggle aria-controls="basic-navbar-nav" />
    <NB.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
        {/* <Nav.Link as={Link} to={"/coffee"}>Coffee</Nav.Link> */}
        <Nav.Link as={Link} to={"/rank"}>Ranking</Nav.Link>
        {/* <Nav.Link as={Link} to={"/add"}>Submit</Nav.Link> */}
      </Nav>
    </NB.Collapse>
  </Container>
  </NB>
  )
}

export default Navbar;