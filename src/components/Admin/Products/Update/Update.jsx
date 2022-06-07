import { useState, useEffect, useContext } from "react";
import { Button, Container, Row, Col, Modal, Form } from "react-bootstrap";
import ProductContext from "../../../../ProductContext";
import Swal from "sweetalert2";

const Update = () => {
	const { fetchAllProducts, fetchForOptions, fetchedProductsForOptions } =
		useContext(ProductContext);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [product, setProduct] = useState("");
	const [fetchedProductId, setFetchedProductId] = useState("");

	const [productName, setProductName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [stocks, setStocks] = useState(1);

	const [btnActive, setBtnActive] = useState(false);

	const asyncFetchHandler = async (show) => {
		await fetchAllProducts();
		if (show) await fetchForOptions();
	};

	useEffect(() => {
		console.log(fetchedProductId);
		if (productName && description && +price && fetchedProductId)
			setBtnActive(true);
		else setBtnActive(false);
		asyncFetchHandler(show);
	}, [show, product, description, price, fetchedProductId]);

	const selectProductChangeHandler = async (e) => {
		setFetchedProductId("");
		setProduct(e.target.value);
		await fetch("https://labloco-medical-supplies.herokuapp.com/products/", {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((response) => response.json())
			.then((result) => {
				const fetchedProduct = result.filter(
					(item) => item.name === e.target.value
				);
				setFetchedProductId(fetchedProduct[0]._id);
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
	};

	const proceedHandler = async (e) => {
		e.preventDefault();
		fetch(
			`https://labloco-medical-supplies.herokuapp.com/products/${fetchedProductId}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
				body: JSON.stringify({
					name: productName,
					description,
					price,
					stocks,
				}),
			}
		)
			.then((response) => response.json())
			.then((result) => {
				if (result.message.includes("success")) {
					Swal.fire({
						title: "SUCCESS",
						text: "Product updated",
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
		fetchAllProducts();
		setProductName("");
		setDescription("");
		setPrice("");
		setStocks("");
		handleClose();
	};

	const productNameChangeHandler = (e) => setProductName(e.target.value);
	const descriptionChangeHandler = (e) => setDescription(e.target.value);
	const priceChangeHandler = (e) => setPrice(e.target.value);
	const stocksChangeHandler = (e) => setStocks(e.target.value);

	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Button className="custom-btn-6" onClick={handleShow}>
						Update product information
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Enter updated product details</Modal.Title>
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
									<Form.Label>New Product Name</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter product name"
										value={productName}
										onChange={productNameChangeHandler}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>New Description</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter product description"
										value={description}
										onChange={descriptionChangeHandler}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>New Price</Form.Label>
									<Form.Control
										type="number"
										placeholder="Price"
										value={price}
										onChange={priceChangeHandler}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>New Stocks</Form.Label>
									<Form.Control
										type="number"
										placeholder="Stocks"
										value={stocks}
										onChange={stocksChangeHandler}
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

export default Update;
