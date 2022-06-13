import { Accordion } from "react-bootstrap";

const DiscountCode = () => {
	return (
		<Accordion.Item eventKey="5">
			<Accordion.Header>Discount Code</Accordion.Header>
			<Accordion.Body>
				<p className="m-0 p-0 text-content">Sample Discount Code</p>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default DiscountCode;
