import { useState, useEffect, useContext } from "react";
import { Button, Container, Row, Col, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import ProductContext from "../../../../ProductContext";

const UploadImage = () => {
	const { allProducts } = useContext(ProductContext);
	const [fetchedProducts, setFetchedProducts] = useState([]);
	const [fetchedProductId, setFetchedProductId] = useState("");

	const fetchForOptions = () => {
		fetch("http://localhost:4000/products/", {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((response) => response.json())
			.then((result) => {
				setFetchedProducts(
					result.map((product) => {
						return (
							<option key={product._id} value={product.name}>
								{product.name}
							</option>
						);
					})
				);
			})
			.catch((err) => {
				return (
					<>
						<p className="text-subheader text-danger">err.message</p>
					</>
				);
			});
	};

	useEffect(() => {
		fetchForOptions();
	}, [allProducts]);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [image, setImage] = useState();

	const [product, setProduct] = useState("");

	const selectProductChangeHandler = (e) => {
		setProduct(e.target.value);
		fetch("http://localhost:4000/products/", {
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

	const imageUploadHandler = (e) => {
		e.preventDefault();
		setImage(e.target.files[0]);
	};

	const proceedHandler = (e) => {
		e.preventDefault();
		const data = new FormData();
		data.append("file", image);
		fetch(`http://localhost:4000/products/image/${fetchedProductId}`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
			body: data,
		})
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
		setProduct("");
		handleClose();
	};

	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Button className="custom-btn-6" onClick={handleShow}>
						Upload image for product
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
										{fetchedProducts}
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

export default UploadImage;
