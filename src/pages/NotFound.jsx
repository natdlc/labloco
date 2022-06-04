import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="py-5 my-5 text-center">
      <h1 className="text-header">Oops, that page doesn't exist.</h1>
      <p>
        Go back to the{" "}
        <Button
          as={Link}
          to="/"
          className="d-inline-block text-content p-0 px-1 bg-prime"
        >
          Home page
        </Button>
      </p>
    </Container>
  );
};

export default NotFound;
