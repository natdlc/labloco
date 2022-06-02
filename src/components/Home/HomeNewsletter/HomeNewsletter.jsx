import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./HomeNewsletter.css";

const HomeNewsletter = () => {
	return (
		<div className="py-5 my-5">
			<h4 className="display-4 text-header text-prime pt-5 text-center">
				Sign up to our newsletter
			</h4>
			<Container>
				<Row>
					<Col className="d-flex justify-content-center">
						<Form
							className="newsletter-form d-flex flex-column"
							style={{ maxWidth: "20rem" }}
						>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<h4 className="text-center mx-auto">
									Get the{" "}
									<span className="text-prime fw-bold"> latest discounts</span>{" "}
									straight to your email.
								</h4>
								<Form.Control
									className="newsletter-email-input"
									type="email"
									placeholder="Enter email"
								/>
								<Form.Text className="text-muted text-content">
									We will not send you any spam emails
								</Form.Text>
							</Form.Group>
							<Button
								className="custom-btn-3 mx-auto mt-4 fs-2 px-4"
								type="submit"
							>
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default HomeNewsletter;
