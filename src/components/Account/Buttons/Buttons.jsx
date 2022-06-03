import { Container, Row, Col } from "react-bootstrap";

const Buttons = () => {
	return (
		<Container className="mb-2">
			<Row>
				<Col className="d-flex gap-3">
					<a className="text-subheader text-danger">Log out</a>
					<a className="text-subheader text-prime">Change Password</a>
				</Col>
			</Row>
		</Container>
	);
};

export default Buttons;
