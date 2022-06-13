import { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import UserContext from "../../../UserContext";
import { Link } from "react-router-dom";

const Buttons = () => {
	return (
		<Container className="mb-2">
			<Row>
				<Col xs={12} className="mb-3">
					<Button as={Link} to="/logout" className="custom-btn-5">
						<span className="text-danger">Log out</span>
					</Button>
				</Col>
				<Col xs={12}>
					<Button as={Link} to="/password" className="custom-btn-5">
						Change Password
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default Buttons;
