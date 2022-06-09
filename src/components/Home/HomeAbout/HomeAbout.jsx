import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeAbout = () => {
	return (
		<Container>
			<Row>
				<Col sm={10} md={8} lg={6} className="d-flex flex-column gap-2 mx-auto">
					<h1 className="display-1 text-header text-prime pt-5 text-center">
						About Us
					</h1>
					<h4 className="text-center mx-auto">
						Founded by entrepreneurs from the medical field with a passion for
						providing students and professionals the supplies they need that
						comes with affordability and peace of mind in every purchase.
					</h4>
					<Button
						as={Link}
						to="/about"
						className="custom-btn-2 mx-auto fs-2 px-4"
					>
						Learn more
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default HomeAbout;
