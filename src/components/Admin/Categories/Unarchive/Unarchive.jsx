import { useEffect, useState } from "react";
import { Button, Container, Row, Col, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const Unarchive = () => {
	const [show, setShow] = useState(false);

	const [btnActive, setBtnActive] = useState(false);

	const [category, setCategory] = useState("");

	const [categoryId, setCategoryId] = useState("");

	const [fetchedCategoriesForOptions, setFetchedCategoriesForOptions] =
		useState([]);

	const handleShow = () => setShow(true);
	const handleClose = () => {
		setCategory("");
		setFetchedCategoriesForOptions([]);
		setCategoryId("");
		setBtnActive(false);
		setShow(false);
	};

	const fetchCategoriesForOptions = async () => {
		await fetch(
			`https://labloco-medical-supplies.herokuapp.com/categories/all/`,
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			}
		)
			.then((response) => response.json())
			.then(async (data) => {
				const categoriesArr = data.map((category) => {
					return (
						<option key={category._id} value={category.name}>
							{category.name}
						</option>
					);
				});
				setFetchedCategoriesForOptions(categoriesArr);
			});
	};

	const selectCategoryChangeHandler = async (e) => {
		setCategoryId("");
		if (e.target.value === "Click to select a category") {
			setCategory("");
			setFetchedCategoriesForOptions([]);
		} else {
			setCategory(e.target.value);
		}
		await fetch(
			`https://labloco-medical-supplies.herokuapp.com/categories/all/`,
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			}
		)
			.then((response) => response.json())
			.then(async (result) => {
				const fetchedCategory = result.filter(
					(category) => category.name === e.target.value
				);
				setCategoryId(fetchedCategory[0]._id);
			})
			.catch(() => setBtnActive(false));
	};

	const proceedHandler = async (e) => {
		e.preventDefault();
		setBtnActive(false);
		await fetch(
			`https://labloco-medical-supplies.herokuapp.com/categories/unarchive/${categoryId}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			}
		)
			.then((response) => response.json())
			.then((result) => {
				if (result.message.includes("unarchived")) {
					Swal.fire({
						title: "SUCCESS",
						text: "Category unarchived",
						icon: "success",
						iconColor: "#17355E",
						confirmButtonColor: "#17355E",
						color: "#17355E",
					});
				} else {
					Swal.fire({
						title: "ERROR",
						text: `Something went wrong: ${result.message}`,
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
					text: `Something went wrong: ${err.message}`,
					icon: "error",
					iconColor: "#17355E",
					confirmButtonColor: "#17355E",
					color: "#17355E",
				});
			});
		handleClose();
	};

	useEffect(() => {
		if (show) fetchCategoriesForOptions();
		else setFetchedCategoriesForOptions([]);
		if (categoryId) setBtnActive(true);
		else setBtnActive(false);
	}, [show, categoryId]);

	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Button className="custom-btn-6" onClick={handleShow}>
						Unarchive a category
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Unarchive a category</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form className="gap-3 d-flex flex-column">
								<Form.Group>
									<Form.Label>Select category to unarchive</Form.Label>
									<Form.Select
										value={category}
										onChange={selectCategoryChangeHandler}
										aria-label="Default select example"
									>
										<option>Click to select a category</option>
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

export default Unarchive;
