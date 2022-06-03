import { Form, Button, Container, Row, Col } from "react-bootstrap";

const RegistrationForm = () => {
	return (
		<Container className="pt-3 pb-5 mb-5">
			<Row>
				<Col>
					<Form style={{maxWidth: "18rem"}} className="mx-auto">
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Control
								className="border-prime text-content"
								type="email"
								placeholder="Email"
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Control
								className="border-prime text-content"
								type="password"
								placeholder="Password"
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Control
								className="border-prime text-content"
								type="password"
								placeholder="Verify Password"
							/>
						</Form.Group>
						<Button className="custom-btn-2" type="submit">
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default RegistrationForm;
