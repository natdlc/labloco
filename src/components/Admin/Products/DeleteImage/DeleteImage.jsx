import { useState, useEffect, useContext } from "react";
import { Button, Container, Row, Col, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import ProductContext from "../../../../ProductContext";

const DeleteImage = () => {
	const { fetchAllProducts, fetchForOptions, fetchedProductsForOptions } =
		useContext(ProductContext);

	const [fetchedProductId, setFetchedProductId] = useState("");

	const [product, setProduct] = useState("");

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [isBtnActive, setIsBtnActive] = useState(false);

	const asyncFetchHandler = async (show) => {
		await fetchAllProducts();
		if (show) await fetchForOptions();
	};

	useEffect(() => {
		asyncFetchHandler(show);
	}, [show]);

	const selectProductChangeHandler = async (e) => {
		setIsBtnActive(false);
		setProduct(e.target.value);
		await fetch("https://labloco-medical-supplies.herokuapp.com/products/", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((response) => response.json())
			.then((result) => {
				setIsBtnActive(true);
				const fetchedProduct = result.filter(
					(item) => item.name === e.target.value
				);
				setFetchedProductId(fetchedProduct[0]._id);
			})
			.catch(() => {
				setIsBtnActive(false);
			});
	};

	const proceedHandler = async (e) => {
		e.preventDefault();
		await fetch(
			`https://labloco-medical-supplies.herokuapp.com/products/image/${fetchedProductId}`,
			{
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			}
		)
			.then((response) => {
				Swal.fire({
					title: "SUCCESS",
					text: "Product updated",
					icon: "success",
					iconColor: "#17355E",
					confirmButtonColor: "#17355E",
					color: "#17355E",
				});
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
		handleClose();
	};

	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Button className="custom-btn-6" onClick={handleShow}>
						Delete product image
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Delete product image</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form className="gap-3 d-flex flex-column">
								<Form.Group>
									<Form.Label>Select Product</Form.Label>
									<Form.Select
										value={product}
										onChange={selectProductChangeHandler}
										aria-label="Default select example"
									>
										<option>Click to select a product</option>
										{fetchedProductsForOptions}
									</Form.Select>
								</Form.Group>
							</Form>
						</Modal.Body>
						<Modal.Footer>
							<Button className="custom-btn-5" onClick={handleClose}>
								Cancel
							</Button>
							{isBtnActive ? (
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

export default DeleteImage;
