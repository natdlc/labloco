import { Container, Row, Col } from "react-bootstrap";
import Quantity from "../Quantity/Quantity";
import "./ItemDetails.css";

const ItemDetails = () => {
	return (
		<Container className="p-0 pe-2 d-flex flex-column justify-content-between">
			<Row>
				<Col xs={7} className="p-0">
					<p className="fs-6 text-truncate text-prime text-subheader">
						product title goes here
					</p>
				</Col>
				<Col xs={5} className="p-0 text-end">
					<button className="cart-item-del-btn text-muted">✖</button>
				</Col>
			</Row>
			<Row>
				<Col xs={7} className="p-0">
					<Quantity />
				</Col>
				<Col xs={5} className="p-0 text-end">
					<p className="fs-6 text-prime text-subheader">₱5000.00</p>
				</Col>
			</Row>
		</Container>
	);
};

export default ItemDetails;
