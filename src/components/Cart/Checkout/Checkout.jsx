import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Checkout = () => {
	return (
		<Col>
			<Row className="gap-2">
				<Col xs={12} className="d-flex justify-content-between">
					<p className="text-subheader text-prime">Subtotal</p>
					<p className="text-subheader text-prime">₱5000.00</p>
				</Col>
				<Col className="d-flex justify-content-between">
					<Button className="w-100 custom-btn-2">Checkout</Button>
				</Col>
			</Row>
		</Col>
	);
};

export default Checkout;
