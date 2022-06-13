import { Accordion } from "react-bootstrap";

const ShippingFee = () => {
	return (
		<Accordion.Item eventKey="4">
			<Accordion.Header>Shipping Fee</Accordion.Header>
			<Accordion.Body>
				<p className="m-0 p-0 text-content">₱500</p>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default ShippingFee;
