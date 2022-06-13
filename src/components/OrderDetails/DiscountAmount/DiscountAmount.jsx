import { Accordion } from "react-bootstrap";

const DiscountAmount = () => {
	return (
		<Accordion.Item eventKey="6">
			<Accordion.Header>Discount Amount</Accordion.Header>
			<Accordion.Body>
				<p className="m-0 p-0 text-content">₱50</p>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default DiscountAmount;
