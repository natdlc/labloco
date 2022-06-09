import { Container, Row, Col } from "react-bootstrap";
import Create from "./Create/Create";

const Discounts = () => {
	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0" xs={12}>
					<Create />
				</Col>
			</Row>
		</Container>
	);
};

export default Discounts;
