import { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";

const TotalAmount = ({ orderDetails }) => {
	const [totalAmount, setTotalAmount] = useState(0);

	useEffect(() => {
		setTotalAmount(orderDetails.totalAmount);
	}, []);
	return (
		<Accordion.Item eventKey="8">
			<Accordion.Header>Total Amount</Accordion.Header>
			<Accordion.Body>
				<p className="m-0 p-0 text-content">₱{totalAmount.toFixed(2)}</p>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default TotalAmount;
