import { useEffect, useState } from "react";
import { Button, Container, Row, Col, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const Add = () => {
	const [courierName, setCourierName] = useState("");
	const [price, setPrice] = useState(0);
	const [eta, setEta] = useState("");

	const [btnActive, setBtnActive] = useState(false);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const courierNameChangeHandler = (e) => setCourierName(e.target.value);
	const priceChangeHandler = (e) => setPrice(e.target.value);
	const etaChangeHandler = (e) => setEta(e.target.value);

	const proceedHandler = async (e) => {
		e.preventDefault();
		await fetch("https://labloco-medical-supplies.herokuapp.com/couriers/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
			body: JSON.stringify({
				courierName,
				price,
				eta,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.message.includes("added")) {
					Swal.fire({
						title: "SUCCESS",
						text: "Courier added",
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
		setCourierName("");
		setPrice(0);
		setEta("");
		handleClose();
	};

	useEffect(() => {
		if (courierName && eta && +price) setBtnActive(true);
		else setBtnActive(false);
	}, [show, courierName, price, eta]);

	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Button className="custom-btn-6" onClick={handleShow}>
						Add new courier
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Enter new courier details</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form className="gap-3 d-flex flex-column">
								<Form.Group>
									<Form.Label>
										<span className="text-danger">*</span> Courier Name
									</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter courier name"
										value={courierName}
										onChange={courierNameChangeHandler}
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
									<Form.Label>ETA</Form.Label>
									<Form.Control
										type="text"
										placeholder="ETA"
										value={eta}
										onChange={etaChangeHandler}
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
