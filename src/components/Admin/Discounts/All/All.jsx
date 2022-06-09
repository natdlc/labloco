import { useState, useEffect } from "react";
import { Button, Container, Row, Col, Modal } from "react-bootstrap";

const All = () => {
	const [discounts, setDiscounts] = useState([]);

	const [show, setShow] = useState(false);
	const handleClose = () => {
		setDiscounts([]);
		setShow(false);
	};
	const handleShow = () => setShow(true);

	const asyncFetchHandler = async () => {
		await fetch("https://labloco-medical-supplies.herokuapp.com/discounts/", {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((response) => response.json())
			.then((discounts) => {
				const discountsArr = discounts.map((discount) => {
					return (
						<Col
							xs={12}
							key={discount._id}
							className="m-0 p-3 d-flex flex-wrap gap-4 border-prime"
						>
							<div className="d-flex flex-column m-0 p-0 gap-1">
								<p className="m-0 p-0 text-prime text-header">Discount name</p>
								<p className="m-0 p-0">{discount.name}</p>
							</div>
							<div className="d-flex flex-column m-0 p-0 gap-1">
								<p className="m-0 p-0 text-prime text-header">Description</p>
								<p className="m-0 p-0">{discount.description}</p>
							</div>
							<div className="d-flex flex-column m-0 p-0 gap-1">
								<p className="m-0 p-0 text-prime text-header">Percentage</p>
								<p className="m-0 p-0">{discount.percentage}</p>
							</div>
							<div className="d-flex flex-column m-0 p-0 gap-1">
								<p className="m-0 p-0 text-prime text-header">Amount</p>
								<p className="m-0 p-0">{discount.amount}</p>
							</div>
							<div className="d-flex flex-column m-0 p-0 gap-1">
								<p className="m-0 p-0 text-prime text-header">Active</p>
								<p className="m-0 p-0">{String(discount.isActive)}</p>
							</div>
						</Col>
					);
				});
				setDiscounts(discountsArr);
			});
	};

	useEffect(() => {
		if (show) asyncFetchHandler(show);
	}, [show]);

	const closeHandler = (e) => {
		e.preventDefault();
		setDiscounts([]);
		handleClose();
	};

	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Button className="custom-btn-6" onClick={handleShow}>
						All discounts overview
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>All discounts overview</Modal.Title>
						</Modal.Header>
						<Modal.Body className="p-0">
							<Row className="p-0 m-0">{discounts}</Row>
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
