import { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";

const DiscountAmount = ({ discountDetails }) => {
	const [discountAmount, setDiscountAmount] = useState("");
	useEffect(() => {
		if (discountDetails.amount) {
			setDiscountAmount(discountDetails.amount);
		} else {
			setDiscountAmount(discountDetails.percentage);
		}
		if (discountAmount == undefined) {
			setDiscountAmount(null);
		}
	}, []);
	return (
		<Accordion.Item eventKey="6">
			<Accordion.Header>Discount Amount</Accordion.Header>
			<Accordion.Body>
				<p className="m-0 p-0 text-content">
					{discountAmount
						? discountDetails.amount
							? `-₱${discountAmount}`
							: `%${discountAmount}`
						: "No discount found"}
				</p>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default DiscountAmount;
