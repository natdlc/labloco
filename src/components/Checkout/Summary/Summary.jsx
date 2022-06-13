import { useState, useContext, useEffect } from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import SummaryItem from "../SummaryItem/SummaryItem";
import SummaryTotals from "../SummaryTotals/SummaryTotals";

const Summary = ({ fetchedCart }) => {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		setCartItems(
			fetchedCart.map((cartProduct) => {
				return (
					<Col key={cartProduct._id} xs={12} className="p-0 m-0">
						<SummaryItem cartProduct={cartProduct} />
					</Col>
				);
			})
		);
	}, [fetchedCart]);

	return (
		<Accordion className="p-0 m-0" defaultActiveKey={["0"]} alwaysOpen>
			<Accordion.Item eventKey="0" className="border-0 border-bottom p-0 m-0">
				<Accordion.Header className="text-header text-prime p-0 m-0">
					Order Summary
				</Accordion.Header>
				<Accordion.Body className="p-0 m-0 py-5 px-3">
					<Container fluid={true} className="p-0 m-0">
						<Row className="p-0 m-0 gap-4">{cartItems}</Row>
						<Row>
							<SummaryTotals />
						</Row>
					</Container>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};

export default Summary;
