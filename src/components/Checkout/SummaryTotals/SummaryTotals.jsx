import { Container, Row, Col } from "react-bootstrap";

const SummaryTotals = () => {
  return (
    <Container className="p-0 m-0">
      <Row className="p-0 m-0">
        <Col className="p-0 m-0">
          <p>Subtotal</p>
        </Col>
        <Col className="text-header text-prime p-0 m-0 text-end">
          <p>₱ 5000.00</p>
        </Col>
      </Row>
      <Row className="p-0 m-0">
        <Col className="p-0 m-0">
          <p>Shipping</p>
        </Col>
        <Col className="p-0 m-0 text-end text-header text-prime">
          <p>Free</p>
        </Col>
      </Row>
    </Container>
  );
};

export default SummaryTotals;
