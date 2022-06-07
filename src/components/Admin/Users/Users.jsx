import { useState } from "react";
import { Button, Container, Row, Col, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const Users = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [email, setEmail] = useState("");

	const [isBtnActive, setIsBtnActive] = useState(false);

	const emailChangeHandler = (e) => {
		setEmail(e.target.value);
		if (e.target.validity.valid && e.target.value !== "") setIsBtnActive(true);
		else setIsBtnActive(false);
	};

	const proceedHandler = async (e) => {
		e.preventDefault();
		const authToken = `Bearer ${localStorage.getItem("accessToken")}`;
		await fetch("https://labloco-medical-supplies.herokuapp.com/users/all", {
			headers: {
				"Content-Type": "application/json",
				Authorization: authToken,
			},
		})
			.then((res) => res.json())
			.then((userList) => {
				const userFound = userList.filter((user) => user.email === email);
				const userId = userFound[0]._id;
				fetch(
					`https://labloco-medical-supplies.herokuapp.com/users/${userId}/admin`,
					{
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
							Authorization: authToken,
						},
					}
				)
					.then((res) => res.json())
					.then((result) => {
						Swal.fire({
							text: result.message,
							icon: "success",
							iconColor: "#17355E",
							color: "#17355E",
							confirmButtonColor: "#17355E",
						});
					})
					.catch(() => {
						Swal.fire({
							text: "Can't proceed, the email is invalid or this user doesn't exist",
							icon: "error",
							iconColor: "#17355E",
							color: "#17355E",
							confirmButtonColor: "#17355E",
						});
					});
				handleClose();
			})
			.catch(() => {
				Swal.fire({
					text: "Can't proceed, the email is invalid or this user doesn't exist",
					icon: "error",
					iconColor: "#17355E",
					color: "#17355E",
					confirmButtonColor: "#17355E",
				});
				handleClose();
			});
	};
	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Button className="custom-btn-6" onClick={handleShow}>
						Change user to admin
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Select user to give admin access to</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form>
								<Form.Group>
									<Form.Control
										onChange={emailChangeHandler}
										type="email"
										value={email}
										placeholder="Enter user's email"
									/>
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
export default Users;
