import { Container, Row, Col } from "react-bootstrap";
import p1 from "../../../assets/icon/gcash-logo.png";
import p2 from "../../../assets/icon/mastercard.png";
import p3 from "../../../assets/icon/visa.png";
import p4 from "../../../assets/icon/cod.png";

const PaymentMethods = () => {
	return (
		<Container fluid={true} className="bg-prime my-5 p-5">
			<Row className="d-flex justify-content-center">
				<Col md={2} xxl={1} xs={6}>
					<img style={{width: "8rem"}}className="img-fluid d-block mx-auto" src={p1} alt="gcash logo" />
				</Col>
				<Col md={2} xxl={1} xs={6}>
					<img style={{width: "8rem"}}className="img-fluid d-block mx-auto" src={p2} alt="gcash logo" />
				</Col>
				<Col md={2} xxl={1} xs={6}>
					<img style={{width: "8rem"}}className="img-fluid d-block mx-auto" src={p3} alt="gcash logo" />
				</Col>
				<Col md={2} xxl={1} xs={6}>
					<img style={{width: "8rem"}}className="img-fluid d-block mx-auto" src={p4} alt="gcash logo" />
				</Col>
			</Row>
		</Container>
	);
};

export default PaymentMethods;
