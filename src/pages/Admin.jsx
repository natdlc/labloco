import { Container, Row, Col, Accordion } from "react-bootstrap";
import Users from "../components/Admin/Users/Users";
import Create from "../components/Admin/Products/Create";

const Admin = () => {
  return (
    <Container style={{ maxWidth: "30rem" }} className="py-5 my-5">
      <h1>Admin Dashboard</h1>
      <Row>
        <Col>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Users</Accordion.Header>
              <Accordion.Body className="p-0 m-0">
                <Users />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Products</Accordion.Header>
              <Accordion.Body className="p-0 m-0">
                <Create />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Orders</Accordion.Header>
              <Accordion.Body>Orders options</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Categories</Accordion.Header>
              <Accordion.Body>Categories options</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Newsletters</Accordion.Header>
              <Accordion.Body>Newsletters options</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>Couriers</Accordion.Header>
              <Accordion.Body>Couriers options</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>Discounts</Accordion.Header>
              <Accordion.Body>Discounts options</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
