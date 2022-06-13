import { Accordion } from "react-bootstrap";

const TotalAmount = () => {
	return (
		<Accordion.Item eventKey="8">
			<Accordion.Header>Total Amount</Accordion.Header>
			<Accordion.Body>
				<p className="m-0 p-0 text-content">₱5000</p>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default TotalAmount;
