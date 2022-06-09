import { useEffect, useState } from "react";
import { Button, Container, Row, Col, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const Activate = () => {
	const [show, setShow] = useState(false);

	const [btnActive, setBtnActive] = useState(false);

	const [courier, setCourier] = useState("");

	const [courierId, setCourierId] = useState("");

	const [fetchedCouriersForOptions, setFetchedCouriersForOptions] = useState(
		[]
	);

	const handleShow = () => setShow(true);
	const handleClose = () => {
		setCourier("");
		setFetchedCouriersForOptions([]);
		setCourierId("");
		setBtnActive(false);
		setShow(false);
	};

	const fetchCouriersForOptions = async () => {
		await fetch(`https://labloco-medical-supplies.herokuapp.com/couriers/`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((response) => response.json())
			.then(async (data) => {
				const couriersArr = data.map((courier) => {
					return (
						<option key={courier._id} value={courier.courierName}>
							{courier.courierName}
						</option>
					);
				});
				setFetchedCouriersForOptions(couriersArr);
			});
	};

	const selectCourierChangeHandler = async (e) => {
		setCourierId("");
		if (e.target.value === "Click to select a courier") {
			setCourier("");
			setFetchedCouriersForOptions([]);
		} else {
			setCourier(e.target.value);
		}
		await fetch(`https://labloco-medical-supplies.herokuapp.com/couriers/`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((response) => response.json())
			.then(async (result) => {
				const fetchedCourier = result.filter(
					(courier) => courier.courierName === e.target.value
				);
				setCourierId(fetchedCourier[0]._id);
			})
			.catch(() => setBtnActive(false));
	};

	const proceedHandler = async (e) => {
		e.preventDefault();
		setBtnActive(false);
		await fetch(
			`https://labloco-medical-supplies.herokuapp.com/couriers/activate/${courierId}`,
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
				if (result.message.includes("activated")) {
					Swal.fire({
						title: "SUCCESS",
						text: "Courier activated",
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
		if (show) fetchCouriersForOptions();
		else setFetchedCouriersForOptions([]);
		if (courierId) setBtnActive(true);
		else setBtnActive(false);
	}, [show, courierId]);

	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Button className="custom-btn-6" onClick={handleShow}>
						Activate a courier
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Activate a courier</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form className="gap-3 d-flex flex-column">
								<Form.Group>
									<Form.Label>Select courier to activate</Form.Label>
									<Form.Select
										value={courier}
										onChange={selectCourierChangeHandler}
										aria-label="Default select example"
									>
										<option>Click to select a courier</option>
										{fetchedCouriersForOptions}
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

export default Activate;
