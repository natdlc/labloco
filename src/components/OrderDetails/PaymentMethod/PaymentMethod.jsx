import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";

const PaymentMethod = ({ orderDetails }) => {
	const [paymentMethod, setPaymentMethod] = useState("");
	useEffect(() => {
		setPaymentMethod(orderDetails.paymentMethod);
	}, []);
	return (
		<Accordion.Item eventKey="2">
			<Accordion.Header>Payment Method</Accordion.Header>
			<Accordion.Body>
				<p className="m-0 p-0 text-content">
					{paymentMethod === "cod" ? "Cash on Delivery" : "Gcash"}
				</p>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default PaymentMethod;
