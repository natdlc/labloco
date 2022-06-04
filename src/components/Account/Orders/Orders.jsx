import { Container, Row, Col, Accordion } from "react-bootstrap";
import OrderHistory from "../OrderHistory/OrderHistory.jsx";

const Orders = () => {
  return (
    <Container className="p-0 m-0">
      <Row className="p-0 m-0">
        <Col className="p-0 m-0">
          <Accordion className="p-0 m-0">
            <Accordion.Item eventKey="0" className="border-0 p-0">
              <Accordion.Header className="p-0 account-accordion-header">
                <h2 className="display-5 text-prime text-header p-0">
                  Order History
                </h2>
              </Accordion.Header>
              <Accordion.Body className="p-0 m-0">
                <OrderHistory />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Orders;
