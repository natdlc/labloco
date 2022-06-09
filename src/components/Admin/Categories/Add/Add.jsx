import { useEffect, useState } from "react";
import { Button, Container, Row, Col, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const Add = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [btnActive, setBtnActive] = useState(false);

	const [categoryName, setCategoryName] = useState("");

	const proceedHandler = async (e) => {
		e.preventDefault();
		setBtnActive(false);
		await fetch(
			"https://labloco-medical-supplies.herokuapp.com/categories/new",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
				body: JSON.stringify({
					name: categoryName,
				}),
			}
		)
			.then((response) => response.json())
			.then((result) => {
				if (result.message === "success") {
					Swal.fire({
						title: "SUCCESS",
						text: "Category created!",
						icon: "success",
						iconColor: "#17355E",
						confirmButtonColor: "#17355E",
						color: "#17355E",
					});
				} else {
					Swal.fire({
						title: "ERROR",
						text: "Category exists",
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
					text: "Something went wrong. Invalid category or category exists",
					icon: "error",
					iconColor: "#17355E",
					confirmButtonColor: "#17355E",
					color: "#17355E",
				});
			});
		setCategoryName("");
		handleClose();
	};

	useEffect(() => {
		if (categoryName) return setBtnActive(true);
		setBtnActive(false);
	}, [show, categoryName]);

	const categoryNameChangeHandler = (e) => setCategoryName(e.target.value);

	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Button className="custom-btn-6" onClick={handleShow}>
						Add new category
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Enter new category name</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form className="gap-3 d-flex flex-column">
								<Form.Group>
									<Form.Label>
										<span className="text-danger">*</span> Category Name
									</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter category name"
										value={categoryName}
										onChange={categoryNameChangeHandler}
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

export default Add;
