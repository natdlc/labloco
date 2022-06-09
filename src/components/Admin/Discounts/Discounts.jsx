import { Container, Row, Col } from "react-bootstrap";
import Create from "./Create/Create";
import All from "./All/All";
import Deactivate from "./Deactivate/Deactivate";
import Activate from "./Activate/Activate";

const Discounts = () => {
	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0" xs={12}>
					<Create />
				</Col>
				<Col className="p-0 m-0" xs={12}>
					<All />
				</Col>
				<Col className="p-0 m-0" xs={12}>
					<Deactivate />
				</Col>
				<Col className="p-0 m-0" xs={12}>
					<Activate />
				</Col>
			</Row>
		</Container>
	);
};

export default Discounts;
