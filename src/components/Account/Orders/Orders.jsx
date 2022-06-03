import { Container, Row, Col, Accordion } from "react-bootstrap";
import OrderHistory from "../OrderHistory/OrderHistory.jsx";

const Orders = () => {
	return (
		<Container className="mt-3 mb-5">
			<Row>
				<Col>
					<Accordion>
						<Accordion.Item eventKey="0" className="border-0">
							<Accordion.Header className="p-0 account-accordion-header">
								<h2 className="display-5 text-prime text-header">
									Order History
								</h2>
							</Accordion.Header>
							<Accordion.Body>
								<OrderHistory />
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
};

export default Orders;
