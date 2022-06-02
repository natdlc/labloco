import { Form, Button } from "react-bootstrap";

const QtyCartForm = () => {
	return (
		<Form>
			<Form.Group>
				<Form.Select aria-label="Default select example">
					<option>Option</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</Form.Select>
			</Form.Group>
			<Form.Group className="d-flex align-items-center gap-1 my-3">
				<Form.Label className="m-0 pe-2">Qty</Form.Label>
				<Form.Control
					type="number"
					placeholder="1"
					defaultValue={1}
					style={{ maxWidth: "5rem" }}
				/>
				<Button className="custom-btn-2 ms-auto flex-shrink-0">Add to Cart</Button>
			</Form.Group>
		</Form>
	);
};

export default QtyCartForm;
