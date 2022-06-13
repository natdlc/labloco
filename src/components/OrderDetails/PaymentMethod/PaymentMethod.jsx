import { Accordion } from "react-bootstrap";

const PaymentMethod = () => {
	return (
		<Accordion.Item eventKey="2">
			<Accordion.Header>Payment Method</Accordion.Header>
			<Accordion.Body>
				<p className="m-0 p-0 text-content">Gcash</p>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default PaymentMethod;
