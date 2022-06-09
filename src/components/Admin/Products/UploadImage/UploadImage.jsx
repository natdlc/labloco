import { useState, useEffect, useContext } from "react";
import { Button, Container, Row, Col, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import ProductContext from "../../../../ProductContext";

const UploadImage = () => {
	const { fetchAllProducts, fetchForOptions, fetchedProductsForOptions } =
		useContext(ProductContext);

	const [fetchedProductId, setFetchedProductId] = useState("");

	const [image, setImage] = useState();

	const [product, setProduct] = useState("");

	const [show, setShow] = useState(false);

	const handleClose = () => {
		setImage();
		setFetchedProductId("");
		setProduct("");
		setIsBtnActive(false);
		setShow(false);
	};
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
				if (image) {
					setIsBtnActive(true);
				} else {
					setIsBtnActive(false);
				}
			})
			.catch(() => {
				setIsBtnActive(false);
			});
	};

	const imageUploadHandler = (e) => {
		e.preventDefault();
		if (e.target.value) {
			setImage(e.target.files[0]);
			console.log(fetchedProductId);
			if (fetchedProductId) {
				setIsBtnActive(true);
			} else {
				setImage();
				setIsBtnActive(false);
			}
		} else {
			setIsBtnActive(false);
			setImage();
		}
	};

	const proceedHandler = async (e) => {
		e.preventDefault();
		// setIsBtnActive(false);
		const data = new FormData();
		data.append("file", image);
		await fetch(
			`https://labloco-medical-supplies.herokuapp.com/products/image/${fetchedProductId}`,
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
				body: data,
			}
		)
			.then(async (result) => {
				await fetchAllProducts();
				setProduct("");
				setFetchedProductId("");
				setImage();
				handleClose();
				Swal.fire({
					title: "SUCCESS",
					text: "Product updated",
					icon: "success",
					iconColor: "#17355E",
					confirmButtonColor: "#17355E",
					color: "#17355E",
				});
			})
			.catch(async (err) => {
				await fetchAllProducts();
				setProduct("");
				setFetchedProductId("");
				setImage();
				handleClose();
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

	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Button className="custom-btn-6" onClick={handleShow}>
						Upload product image
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Upload image for product</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form className="gap-3 d-flex flex-column">
								<Form.Group>
									<Form.Label>Select Product</Form.Label>
									<Form.Select
										onChange={selectProductChangeHandler}
										value={product}
										aria-label="Default select example"
									>
										<option>Click to select a product</option>
										{fetchedProductsForOptions}
									</Form.Select>
								</Form.Group>
								<Form.Group>
									<Form.Label>Upload image</Form.Label>
									<Form.Control onChange={imageUploadHandler} type="file" />
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

export default UploadImage;
