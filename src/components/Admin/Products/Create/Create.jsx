import { useState, useContext, useEffect } from "react";
import { Button, Container, Row, Col, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import ProductContext from "../../../../ProductContext";

const Create = () => {
	const { fetchAllProducts, allProducts } = useContext(ProductContext);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [productName, setProductName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [stocks, setStocks] = useState(1);

	const proceedHandler = async (e) => {
		e.preventDefault();
		await fetch("https://labloco-medical-supplies.herokuapp.com/products/new", {
			method: "POST",
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
		})
			.then((response) => response.json())
			.then(async (data) => {
				if (data.message === "success") {
					Swal.fire({
						title: "SUCCESS",
						text: "Product created!",
						icon: "success",
						iconColor: "#17355E",
						confirmButtonColor: "#17355E",
						color: "#17355E",
					});
				} else {
					Swal.fire({
						title: "ERROR",
						text: data.message,
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
						Create new product
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Enter new product details</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form className="gap-3 d-flex flex-column">
								<Form.Group>
									<Form.Label>
										<span className="text-danger">*</span> Product Name
									</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter product name"
										value={productName}
										onChange={productNameChangeHandler}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>
										<span className="text-danger">*</span> Description
									</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter product description"
										value={description}
										onChange={descriptionChangeHandler}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>
										<span className="text-danger">*</span> Price
									</Form.Label>
									<Form.Control
										type="number"
										placeholder="Price"
										value={price}
										onChange={priceChangeHandler}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>Stocks</Form.Label>
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
							<Button className="custom-btn-2" onClick={proceedHandler}>
								Proceed
							</Button>
						</Modal.Footer>
					</Modal>
				</Col>
			</Row>
		</Container>
	);
};

export default Create;
