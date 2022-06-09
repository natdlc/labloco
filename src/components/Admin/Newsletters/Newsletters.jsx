import { Container, Row, Col } from "react-bootstrap";
import All from "./All/All";

const Newsletters = () => {
	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0" xs={12}>
					<All />
				</Col>
			</Row>
		</Container>
	);
};

export default Newsletters;
