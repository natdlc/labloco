import { Container, Row, Col } from "react-bootstrap";
import "./SummaryItem.css";

const SummaryItem = () => {
	return (
		<Container fluid={true} className="p-0 m-0">
			<Row className="p-0 m-0 border-bottom pb-4">
				<Col xs={2} className="p-0 m-0 summary-item-img-col">
					<img
						style={{width: "6rem"}}
						className="img-fluid p-0 m-0"
						src="https://via.placeholder.com/200x200"
						alt=""
					/>
					<p className="summary-item-quantity">5</p>
				</Col>
				<Col xs={6} className="ps-3 m-0">
					<p className="text-prime text-subheader p-0">
						Product name
					</p>
				</Col>
				<Col xs={4} className="p-0 m-0 text-end">
					<p className="text-prime text-subheader p-0">₱ 5000.00</p>
				</Col>
			</Row>
		</Container>
	);
};

export default SummaryItem;
