import { Container, Row, Col } from "react-bootstrap";
import "./SummaryItem.css";

const SummaryItem = () => {
	return (
		<Container fluid={true} className="p-0 m-0">
			<Row className="p-2 m-0 gap-4 border-bottom">
				<Col xs={2} className="p-0 m-0 summary-item-img-col">
					<img
						style={{width: "6rem"}}
						className="img-fluid p-0 m-0"
						src="https://via.placeholder.com/200x200"
						alt=""
					/>
					<p className="summary-item-quantity">5</p>
				</Col>
				<Col className="p-0 m-0">
					<p className="text-prime text-subheader p-0">
						A pretty long product name for spacing's sake
					</p>
				</Col>
				<Col className="p-0 m-0">
					<p className="text-prime text-subheader p-0">₱ 5000.00</p>
				</Col>
			</Row>
		</Container>
	);
};

export default SummaryItem;
