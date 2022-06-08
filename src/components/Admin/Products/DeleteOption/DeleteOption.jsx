import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import ProductContext from "../../../../ProductContext";
import Swal from "sweetalert2";

const DeleteOption = () => {
	const { fetchAllProducts, fetchForOptions, fetchedProductsForOptions } =
		useContext(ProductContext);
	const [product, setProduct] = useState("");
	const [fetchedProductId, setFetchedProductId] = useState("");
	const [isProductSelected, setIsProductSelected] = useState(false);

	//option label
	const [fetchedOptionLabelId, setFetchedOptionLabelId] = useState("");
	const [fetchedOptionLabelsForOptions, setFetchedOptionLabelsForOptions] =
		useState([]);
	const [optionLabel, setOptionLabel] = useState("");
	const [isOptionLabelSelected, setIsOptionLabelSelected] = useState(false);

	//option value
	const [fetchedOptionValuesForOptions, setFetchedOptionValuesForOptions] =
		useState([]);
	const [optionValue, setOptionValue] = useState("");

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [btnActive, setBtnActive] = useState(false);

	const asyncFetchHandler = async (show) => {
		await fetchAllProducts();
		if (show) {
			await fetchForOptions();
		}
	};

	useEffect(() => {
		if (fetchedProductId && optionLabel && optionValue) setBtnActive(true);
		else setBtnActive(false);
		asyncFetchHandler(show);
	}, [show, fetchedProductId, optionLabel, optionValue]);

	const selectProductChangeHandler = async (e) => {
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
				const tempContainer = [];
				setFetchedOptionLabelsForOptions(
					fetchedProduct[0].options.map((option) => {
						if (!tempContainer.includes(option.label)) {
							tempContainer.push(option.label);
							return (
								<option key={option._id} value={option.label}>
									{option.label}
								</option>
							);
						}
					})
				);
				setIsProductSelected(true);
			})
			.catch((err) => {
				setFetchedOptionLabelsForOptions([]);
				setIsProductSelected(false);
			});
	};

	const selectOptionLabelChangeHandler = async (e) => {
		setIsOptionLabelSelected(false);
		setOptionLabel(e.target.value);
		await fetch(
			`https://labloco-medical-supplies.herokuapp.com/products/admin/${fetchedProductId}`,
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			}
		)
			.then((response) => response.json())
			.then((result) => {
				const optionsArr = result.options.map((option) => {
					if (option.label === e.target.value) {
						setFetchedOptionLabelId(option._id);
						return (
							<option key={option._id} value={option.value}>
								{option.value}
							</option>
						);
					}
				});
				setFetchedOptionValuesForOptions(optionsArr);
				setIsOptionLabelSelected(true);
			})
			.catch((err) => {
				setFetchedOptionValuesForOptions([]);
				setIsOptionLabelSelected(false);
			});
		if (e.target.value == "Click to select an option label") {
			setIsOptionLabelSelected(false);
		}
	};

	const selectOptionValueChangeHandler = async (e) => {
		setOptionValue(e.target.value);
	};

	const proceedHandler = async (e) => {
		e.preventDefault();
		console.log(`
      product: ${product}
      option label: ${optionLabel}
      option value: ${optionValue}
    `);
		await fetch(
			`https://labloco-medical-supplies.herokuapp.com/products/option/${fetchedProductId}`,
			{
				method: "DELETE",
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
						text: "Option deleted",
						icon: "success",
						iconColor: "#17355E",
						confirmButtonColor: "#17355E",
						color: "#17355E",
					});
				} else {
					Swal.fire({
						title: "ERROR",
						text: result.message,
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
		fetchAllProducts();
		setProduct("");
		setOptionLabel("");
		setOptionValue("");
		setIsProductSelected(false);
		setIsOptionLabelSelected(false);
		handleClose();
	};

	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Button className="custom-btn-6" onClick={handleShow}>
						Delete option from product
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Delete option from product</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form className="gap-3 d-flex flex-column">
								<Form.Group>
									<Form.Label>Select product to update</Form.Label>
									<Form.Select
										value={product}
										onChange={selectProductChangeHandler}
										aria-label="Default select example"
									>
										<option>Click to select a product</option>
										{fetchedProductsForOptions}
									</Form.Select>
								</Form.Group>
								{isProductSelected ? (
									<Form.Group>
										<Form.Label>Choose option label to remove</Form.Label>
										<Form.Select
											value={optionLabel}
											onChange={selectOptionLabelChangeHandler}
											aria-label="Default select example"
										>
											<option>Click to select an option label</option>
											{fetchedOptionLabelsForOptions}
										</Form.Select>
									</Form.Group>
								) : (
									false
								)}
								{isOptionLabelSelected ? (
									<Form.Group>
										<Form.Label>Choose option value to remove</Form.Label>
										<Form.Select
											value={optionValue}
											onChange={selectOptionValueChangeHandler}
											aria-label="Default select example"
										>
											<option>Click to select an option value</option>
											{fetchedOptionValuesForOptions}
										</Form.Select>
									</Form.Group>
								) : (
									false
								)}
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

export default DeleteOption;
