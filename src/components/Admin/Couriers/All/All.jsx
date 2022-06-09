import { useState, useEffect } from "react";
import { Button, Container, Row, Col, Modal, Table } from "react-bootstrap";
import date from "date-and-time";

const All = () => {
	const [couriers, setCouriers] = useState([]);

	const [show, setShow] = useState(false);
	const handleClose = () => {
		setCouriers([]);
		setShow(false);
	};
	const handleShow = () => setShow(true);

	const asyncFetchHandler = async () => {
		await fetch("https://labloco-medical-supplies.herokuapp.com/couriers/", {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((response) => response.json())
			.then((couriers) => {
				const couriersArr = couriers.map((courier) => {
					const createdOnDate = new Date(courier.createdOn);
					const createdOn = date.format(createdOnDate, "YYYY/MM/DD HH:mm:ss");
					return (
						<Col
							xs={12}
							key={courier._id}
							className="m-0 p-3 d-flex flex-wrap gap-4 border-prime"
						>
							<div className="d-flex flex-column m-0 p-0 gap-1">
								<p className="m-0 p-0 text-prime text-header">Date Added</p>
								<p className="m-0 p-0">{createdOn}</p>
							</div>
							<div className="d-flex flex-column m-0 p-0 gap-1">
								<p className="m-0 p-0 text-prime text-header">Courier Name</p>
								<p className="m-0 p-0">{courier.courierName}</p>
							</div>
							<div className="d-flex flex-column m-0 p-0 gap-1">
								<p className="m-0 p-0 text-prime text-header">Price</p>
								<p className="m-0 p-0">{courier.price}</p>
							</div>
							<div className="d-flex flex-column m-0 p-0 gap-1">
								<p className="m-0 p-0 text-prime text-header">ETA</p>
								<p className="m-0 p-0">{courier.eta}</p>
							</div>
							<div className="d-flex flex-column m-0 p-0 gap-1">
								<p className="m-0 p-0 text-prime text-header">Active</p>
								<p className="m-0 p-0">{String(courier.isActive)}</p>
							</div>
						</Col>
					);
				});
				setCouriers(couriersArr);
			});
	};

	useEffect(() => {
		if (show) asyncFetchHandler(show);
	}, [show]);

	const closeHandler = (e) => {
		e.preventDefault();
		setCouriers([]);
		handleClose();
	};

	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Button className="custom-btn-6" onClick={handleShow}>
						All couriers overview
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>All couriers overview</Modal.Title>
						</Modal.Header>
						<Modal.Body className="p-0">
							<Row className="p-0 m-0">{couriers}</Row>
						</Modal.Body>
						<Modal.Footer>
							<Button className="custom-btn-2" onClick={closeHandler}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</Col>
			</Row>
		</Container>
	);
};

export default All;
