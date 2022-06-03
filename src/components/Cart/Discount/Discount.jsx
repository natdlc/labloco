import { Col, Form, Button } from "react-bootstrap";

const Discount = () => {
	return (
		<Col xs={12}>
			<Form className="d-flex align-items-center gap-2">
				<Form.Group>
					<Form.Control
						className="text-prime text-content"
						placeholder="Enter discount code"
					/>
				</Form.Group>
				<Button style={{ maxWidth: "5rem" }} className="custom-btn-3">
					Apply
				</Button>
			</Form>
		</Col>
	);
};

export default Discount;
