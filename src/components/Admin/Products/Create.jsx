import { useState } from "react";
import { Button, Container, Row, Col, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const Create = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="p-0 m-0">
      <Row className="p-0 m-0">
        <Col className="p-0 m-0">
          <Button className="custom-btn-6" onClick={handleShow}>
            Create new product
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Select user to give admin access to</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Control type="email" placeholder="Enter user's email" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button className="custom-btn-5" onClick={handleClose}>
                Cancel
              </Button>
              <Button className="custom-btn-2" onClick={handleClose}>
                Proceed
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default Create;
