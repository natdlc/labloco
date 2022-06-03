import { Container, Row, Col } from "react-bootstrap";

const Details = () => {
	return (
		<Container>
      <h2 className="display-5 text-prime text-header">Details</h2>
      <Row>
        <Col className="">
          <h4 className="text-subheader p-0 m-0">Email</h4>
          <p className="text-content">email@mail.com</p>
        </Col>
      </Row>
		</Container>
	);
};

export default Details;
