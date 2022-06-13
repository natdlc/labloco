import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";

const ShippingFee = ({ courierDetails }) => {
	const [fee, setFee] = useState(0);

	useEffect(() => {
		setFee(courierDetails.price);
	}, [courierDetails]);
	return (
		<Accordion.Item eventKey="4">
			<Accordion.Header>Shipping Fee</Accordion.Header>
			<Accordion.Body>
				<p className="m-0 p-0 text-content">₱{fee}</p>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default ShippingFee;
