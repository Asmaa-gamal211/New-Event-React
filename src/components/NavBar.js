import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/home">
          New <span style={{ color: "#f2545f" }}>Event</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">intro</Nav.Link>
            <Nav.Link href="/overview">overview</Nav.Link>
            <Nav.Link href="/speakers">speakers</Nav.Link>
            <Nav.Link href="/programes">programes</Nav.Link>
            <Nav.Link href="/venue">venue</Nav.Link>
            <Nav.Link href="/register">register</Nav.Link>
            <Nav.Link href="/sponsers">sponsers</Nav.Link>
            <Nav.Link href="/contact">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
