import { useState, useEffect, useContext } from "react";
import { Button, Container, Row, Col, Modal, Form } from "react-bootstrap";
import ProductContext from "../../../../ProductContext";
import Swal from "sweetalert2";

const AddOption = () => {
	const { fetchAllProducts, fetchForOptions, fetchedProductsForOptions } =
		useContext(ProductContext);

	const [product, setProduct] = useState("");
	const [fetchedProductId, setFetchedProductId] = useState("");

	const [optionLabel, setOptionLabel] = useState("");
	const [optionValue, setOptionValue] = useState("");

	const [btnActive, setBtnActive] = useState(false);

	const [show, setShow] = useState(false);
	const handleClose = () => {
		setShow(false);
	};
	const handleShow = () => setShow(true);

	const asyncFetchHandler = async (show) => {
		await fetchAllProducts();
		if (show) await fetchForOptions();
	};

	useEffect(() => {
		if (optionLabel && optionValue && fetchedProductId) setBtnActive(true);
		else setBtnActive(false);
		asyncFetchHandler(show);
	}, [show, optionLabel, optionValue, fetchedProductId]);

	const selectProductChangeHandler = async (e) => {
		setBtnActive(false);
		setFetchedProductId("");
		setProduct(e.target.value);
		await fetch("https://labloco-medical-supplies.herokuapp.com/products/", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((response) => response.json())
			.then((result) => {
				const fetchedProduct = result.filter(
					(item) => item.name === e.target.value
				);
				setFetchedProductId(fetchedProduct[0]._id);
				setBtnActive(true);
			})
			.catch((err) => {
				setBtnActive(false);
			});
	};

	const optionLabelChangeHandler = (e) => setOptionLabel(e.target.value);
	const optionValueChangeHandler = (e) => setOptionValue(e.target.value);

	const proceedHandler = async (e) => {
		e.preventDefault();
		await fetch(
			`https://labloco-medical-supplies.herokuapp.com/products/option/${fetchedProductId}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
				body: JSON.stringify({
					label: optionLabel,
					value: optionValue,
				}),
			}
		)
			.then((response) => response.json())
			.then((result) => {
				if (result.message.includes("success")) {
					Swal.fire({
						title: "SUCCESS",
						text: "Option added",
						icon: "success",
						iconColor: "#17355E",
						confirmButtonColor: "#17355E",
						color: "#17355E",
					});
				} else {
					Swal.fire({
						title: "ERROR",
						text: result,
						icon: "error",
						iconColor: "#17355E",
						confirmButtonColor: "#17355E",
						color: "#17355E",
					});
				}
			})
			.catch((err) => {
				Swal.fire({
					title: "ERROR",
					text: err.message,
					icon: "error",
					iconColor: "#17355E",
					confirmButtonColor: "#17355E",
					color: "#17355E",
				});
			});
		await fetchAllProducts();
		setProduct("");
		setOptionLabel("");
		setOptionValue("");
		handleClose();
	};

	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Button className="custom-btn-6" onClick={handleShow}>
						Add option to product
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>
								Add custom option for product (ie: Size: large)
							</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form className="gap-3 d-flex flex-column">
								<Form.Group>
									<Form.Label>Select Product to update</Form.Label>
									<Form.Select
										value={product}
										onChange={selectProductChangeHandler}
										aria-label="Default select example"
									>
										<option>Click to select a product</option>
										{fetchedProductsForOptions}
									</Form.Select>
								</Form.Group>
								<Form.Group>
									<Form.Label>New option label</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter product name"
										value={optionLabel}
										onChange={optionLabelChangeHandler}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>New option value</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter product description"
										value={optionValue}
										onChange={optionValueChangeHandler}
									/>
								</Form.Group>
							</Form>
						</Modal.Body>
						<Modal.Footer>
							<Button className="custom-btn-5" onClick={handleClose}>
								Cancel
							</Button>
							{btnActive ? (
								<Button className="custom-btn-2" onClick={proceedHandler}>
									Proceed
								</Button>
							) : (
								<Button
									disabled
									className="custom-btn-2"
									onClick={proceedHandler}
								>
									Proceed
								</Button>
							)}
						</Modal.Footer>
					</Modal>
				</Col>
			</Row>
		</Container>
	);
};

export default AddOption;
