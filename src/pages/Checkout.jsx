import { Container, Row, Col, Button } from "react-bootstrap";
import Summary from "../components/Checkout/Summary/Summary";
import PayMethod from "../components/Checkout/PayMethod/PayMethod";
import Shipping from "../components/Checkout/Shipping/Shipping";
import OrderForm from "../components/Checkout/OrderForm/OrderForm";

const Checkout = () => {
	return (
		<Container
			style={{ maxWidth: "25rem" }}
			fluid={true}
			className="p-0 m-0 px-2 my-5 mx-auto"
		>
			<h1 className="display-1 text-header text-prime py-3 text-center">
				Checkout
			</h1>
			<Row className="p-0 m-0">
				<Col xs={12} className="p-0 pb-3">
					<PayMethod />
				</Col>
				<Col xs={12} className="p-0">
					<Shipping />
				</Col>
				<Col xs={12} className="p-0">
					<OrderForm />
				</Col>
				<Col xs={12} className="p-0">
					<Summary />
				</Col>
				<Row className="p-0 m-0 pt-4">
					<Col xs={4} className="p-0 m-0 fs-1">
						<p>Total</p>
					</Col>
					<Col xs={8} className="p-0 m-0 text-end fs-1 text-prime text-header">
						<p>₱ 5000.00</p>
					</Col>
				</Row>
				<Col xs={12} className="p-0 text-center py-4 px-2">
					<Button className="custom-btn-2 w-100 py-3 fs-2">
						Complete Order
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default Checkout;
