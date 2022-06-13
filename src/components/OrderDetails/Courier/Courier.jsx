import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";

const Courier = ({ courierDetails }) => {
	const [courier, setCourier] = useState("");

	useEffect(() => {
		setCourier(courierDetails.courierName);
	}, []);
	return (
		<Accordion.Item eventKey="3">
			<Accordion.Header>Courier</Accordion.Header>
			<Accordion.Body>
				<p className="m-0 p-0 text-content">{courier}</p>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default Courier;
