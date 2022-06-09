import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const QtyCartForm = ({ props }) => {
	const { allProducts, productId } = props;
	const [optionForms, setOptionForms] = useState([]);

	useEffect(() => {
		const product = allProducts.filter(
			(product) => product._id === productId
		)[0];
		const productOptions = product.options;
		const optionLabelsArr = [
			...new Set(
				productOptions.map((option) => {
					return option.label;
				})
			),
		];

		const optionFormsArr = optionLabelsArr.map((option, i) => {
			const optionValuesArr = productOptions
				.filter((productOption) => productOption.label === option)
				.map((specOption, index) => {
					return <option key={index}>{specOption.value}</option>;
				});
			return (
				<Form.Select key={i} aria-label="Default select example">
					<option>{option}</option>
					{optionValuesArr}
				</Form.Select>
			);
		});

		setOptionForms(optionFormsArr);
	}, []);
	return (
		<Form>
			<Form.Group>{optionForms}</Form.Group>
			<Form.Group className="d-flex align-items-center gap-1 my-3">
				<Form.Label className="m-0 pe-2">Qty</Form.Label>
				<Form.Control
					type="number"
					placeholder="1"
					defaultValue={1}
					style={{ maxWidth: "5rem" }}
				/>
				<Button className="custom-btn-2 ms-auto flex-shrink-0">
					Add to Cart
				</Button>
			</Form.Group>
		</Form>
	);
};

export default QtyCartForm;
