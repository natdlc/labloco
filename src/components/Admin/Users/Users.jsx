import { useState } from "react";
import { Button, Container, Row, Col, Modal, Form } from "react-bootstrap";

const Users = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");

  const emailChangeHandler = (e) => setEmail(e.target.value);

  const proceedHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/users/all")
      .then((res) => res.json())
      .then((userList) => {
        console.log(userList);
        handleClose();
      });
  };
  return (
    <Container className="p-0 m-0">
      <Row className="p-0 m-0">
        <Col className="p-0 m-0">
          <Button className="custom-btn-6" onClick={handleShow}>
            Change user to admin
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Select user to give admin access to</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Control
                    onChange={emailChangeHandler}
                    value={email}
                    placeholder="Enter user's email"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button className="custom-btn-5" onClick={handleClose}>
                Cancel
              </Button>
              <Button className="custom-btn-2" onClick={proceedHandler}>
                Proceed
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};
export default Users;
