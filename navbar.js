import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <Navbar bg="primary" variant="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="navbar-brand navbar"
                activeClassName="navbar-brand--active"
                href="#/"
                title=" Home Page"
              >
                {" "}
                Home{" "}
              </Nav.Link>
              <Nav.Link
                className="navbar-brand navbar"
                title="Create your Account"
                href="#/CreateAccount/"
              >
                {" "}
                Create Account{" "}
              </Nav.Link>
              <Nav.Link
                className="navbar-brand navbar"
                title="Deposit in your Account"
                href="#/Deposit/"
              >
                Deposit{" "}
              </Nav.Link>
              <Nav.Link
                className="navbar-brand navbar"
                title="Withdraw from your Account"
                href="#/Withdraw/"
              >
                WithDraw{" "}
              </Nav.Link>
              <Nav.Link
                className="navbar-brand navbar"
                title="Track your Transactions"
                href="#/AllData/"
              >
                All Data
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
