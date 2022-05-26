import { Navbar, Container, Nav } from "react-bootstrap";

function Header(): JSX.Element {
  return (
    <div>
      <Navbar bg="info" variant="dark">
        <Container>
          <Nav className="me-auto">
            <div className="d-flex">
              <img src="./icon/user" alt="" />
              <Nav.Link href="/">Home</Nav.Link>
            </div>
            <Nav.Link href="/User">Users</Nav.Link>
            <Nav.Link href="/Adduser">Add User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
