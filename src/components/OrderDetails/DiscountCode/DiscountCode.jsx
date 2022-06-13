import { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";

const DiscountCode = ({ discountDetails }) => {
	const [discountName, setDiscountName] = useState("");
	useEffect(() => {
		setDiscountName(discountDetails.name);
	}, []);
	return (
		<Accordion.Item eventKey="5">
			<Accordion.Header>Discount Code</Accordion.Header>
			<Accordion.Body>
				<p className="m-0 p-0 text-content">
					{discountName ? discountName : "No discount found"}
				</p>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default DiscountCode;
