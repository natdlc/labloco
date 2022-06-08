import { useState, useEffect } from "react";
import { Button, Container, Row, Col, Modal, Table } from "react-bootstrap";
import date from "date-and-time";

const All = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => {
		setOrders([]);
		setShow(false);
	};

	const handleShow = () => setShow(true);

	const [orders, setOrders] = useState([]);

	const fetchAllUsers = async () => {
		await fetch("https://labloco-medical-supplies.herokuapp.com/users/all", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((response) => response.json())
			.then(async (users) => {
				await fetch(
					"https://labloco-medical-supplies.herokuapp.com/orders/all",
					{
						headers: {
							Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
						},
					}
				)
					.then((response) => response.json())
					.then((orders) => {
						const newOrders = orders.map((order) => {
							return {
								id: order._id,
								purchasedOn: order.purchasedOn,
								userEmail: getEmail(order.userId, users),
								status: order.status,
								payMethod: order.paymentMethod,
								total: order.totalAmount,
							};
						});
						const ordersArr = newOrders.map((order) => {
							const purchasedOnDate = new Date(order.purchasedOn);
							const purchasedOn = date.format(
								purchasedOnDate,
								"YYYY/MM/DD HH:mm:ss"
							);
							return (
								<Col
									xs={12}
									key={order.id}
									className="m-0 p-3 d-flex flex-wrap gap-4 border-prime"
								>
									<div className="d-flex flex-column m-0 p-0 gap-1">
										<p className="m-0 p-0 text-prime text-header">
											Date Purchased
										</p>
										<p className="m-0 p-0">{purchasedOn}</p>
									</div>
									<div className="d-flex flex-column m-0 p-0 gap-1">
										<p className="m-0 p-0 text-prime text-header">User Email</p>
										<p className="m-0 p-0">{order.userEmail}</p>
									</div>
									<div className="d-flex flex-column m-0 p-0 gap-1">
										<p className="m-0 p-0 text-prime text-header">Status</p>
										<p className="m-0 p-0">{order.status}</p>
									</div>
									<div className="d-flex flex-column m-0 p-0 gap-1">
										<p className="m-0 p-0 text-prime text-header">
											Payment Method
										</p>
										<p className="m-0 p-0">{order.payMethod}</p>
									</div>
									<div className="d-flex flex-column m-0 p-0 gap-1">
										<p className="m-0 p-0 text-prime text-header">Total</p>
										<p className="m-0 p-0">{order.total}</p>
									</div>
								</Col>
							);
						});
						setOrders(ordersArr);
					})
					.catch((err) => err);
			})
			.catch((err) => err);
	};

	const getEmail = (userId, fetchedUsers) => {
		const userMatch = fetchedUsers.find((user) => user._id === userId);
		return userMatch.email;
	};

	useEffect(() => {
		if (show === true) {
			fetchAllUsers();
		}
	}, [show]);

	const closeHandler = (e) => {
		e.preventDefault();
		setOrders([]);
		handleClose();
	};

	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Button className="custom-btn-6" onClick={handleShow}>
						All orders overview
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>All orders overview</Modal.Title>
						</Modal.Header>
						<Modal.Body className="p-0">
							<Row className="p-0 m-0">{orders}</Row>
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
