import { useState, useEffect } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import OrderHistory from "../OrderHistory/OrderHistory.jsx";

const Orders = () => {
	const [orders, setOrders] = useState([]);

	const fetchOrders = () =>
		fetch("https://labloco-medical-supplies.herokuapp.com/users/orders", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((response) => response.json())
			.then((result) => {
				setOrders(result);
			});

	useEffect(() => {
		fetchOrders();
	}, []);

	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Accordion className="p-0 m-0 mb-5 border-bottom">
						<Accordion.Item eventKey="0" className="border-0 p-0">
							<Accordion.Header className="account-accordion-header p-0 px-1">
								Order History
							</Accordion.Header>
							<Accordion.Body className="p-0 m-0 px-1">
								<OrderHistory orders={orders} fetchOrders={fetchOrders} />
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
};

export default Orders;
