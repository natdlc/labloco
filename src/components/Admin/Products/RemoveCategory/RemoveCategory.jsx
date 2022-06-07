import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import ProductContext from "../../../../ProductContext";
import CategoryContext from "../../../../CategoryContext";
import Swal from "sweetalert2";

const AddCategory = () => {
	const {
		fetchAllCategories,
		fetchCategoriesForOptions,
		fetchedCategoriesForOptions,
	} = useContext(CategoryContext);
	const [category, setCategory] = useState("");
	const [fetchedCategoryId, setFetchedCategoryId] = useState("");

	const { fetchAllProducts, fetchForOptions, fetchedProductsForOptions } =
		useContext(ProductContext);
	const [product, setProduct] = useState("");
	const [fetchedProductId, setFetchedProductId] = useState("");

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [btnActive, setBtnActive] = useState(false);

	const asyncFetchHandler = async (show) => {
		await fetchAllProducts();
		await fetchAllCategories();
		if (show) {
			await fetchForOptions();
			await fetchCategoriesForOptions();
		}
	};

	useEffect(() => {
		if (fetchedProductId && fetchedCategoryId) setBtnActive(true);
		else setBtnActive(false);
		asyncFetchHandler(show);
	}, [show, fetchedProductId, fetchedCategoryId]);

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

	const selectCategoryChangeHandler = async (e) => {
		setFetchedCategoryId("");
		setCategory(e.target.value);
		await fetch(
			"https://labloco-medical-supplies.herokuapp.com/categories/all",
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			}
		)
			.then((response) => response.json())
			.then((result) => {
				const fetchedCategory = result.filter(
					(item) => item.name === e.target.value
				);
				setFetchedCategoryId(fetchedCategory[0]._id);
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
		await fetch(
			`https://labloco-medical-supplies.herokuapp.com/products/${fetchedProductId}/category/${fetchedCategoryId}/delete`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			}
		)
			.then((response) => response.json())
			.then((result) => {
				if (result.message.includes("successfully")) {
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
		fetchAllCategories();
		handleClose();
	};

	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Button className="custom-btn-6" onClick={handleShow}>
						Remove category from product
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Remove category from product</Modal.Title>
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
									<Form.Label>Choose Category to delete</Form.Label>
									<Form.Select
										value={category}
										onChange={selectCategoryChangeHandler}
										aria-label="Default select example"
									>
										<option>Click to select a product</option>
										{fetchedCategoriesForOptions}
									</Form.Select>
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

export default AddCategory;
