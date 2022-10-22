import { Navbar, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchBar = ({ setKeyword }) => {
  return (
    <Container>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#">Shoppy</Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Shops"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Button variant="outline-success">Search</Button>
        </Container>
      </Navbar>
    </Container>
  );
};

export default SearchBar;
