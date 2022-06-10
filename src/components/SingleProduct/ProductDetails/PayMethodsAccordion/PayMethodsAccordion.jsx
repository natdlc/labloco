import { useState } from "react";
import { Accordion, Form } from "react-bootstrap";

const PayMethodsAccordion = () => {
	const [payMethod, setPayMethod] = useState("");
	const payMethodChangeHandler = (e) => setPayMethod(e.target.value);
	return (
		<Accordion.Item eventKey="2" className="border-0 border-bottom">
			<Accordion.Header className="text-header text-prime">
				Payment Methods
			</Accordion.Header>
			<Accordion.Body className="p-3">
				<Form.Group>
					<Form.Label>Select payment method</Form.Label>
					<Form.Select
						value={payMethod}
						onChange={payMethodChangeHandler}
						aria-label="Default select example"
					>
						<option>Click to select a courier</option>
						<option value="gcash">Gcash</option>
						<option value="cod">Cash on Delivery</option>
					</Form.Select>
				</Form.Group>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default PayMethodsAccordion;
