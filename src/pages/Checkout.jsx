import { Container, Row, Col } from "react-bootstrap";
import Summary from "../components/Checkout/Summary/Summary";
import PayMethod from "../components/Checkout/PayMethod/PayMethod";
import Shipping from "../components/Checkout/Shipping/Shipping";
import OrderForm from "../components/Checkout/OrderForm/OrderForm";

const Checkout = () => {
	return (
		<Container fluid={true} className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0">
					<Summary />
				</Col>
				{/* <Col xs={12} className="p-0">
					<PayMethod />
				</Col>
				<Col xs={12} className="p-0">
					<Shipping />
				</Col>
				<Col xs={12} className="p-0">
					<OrderForm />
				</Col> */}
			</Row>
		</Container>
	);
};

export default Checkout;
