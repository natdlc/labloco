import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./FeaturedProducts.css";
import imgPlaceholder from "../../../assets/imgs/limited-bundles-img.png";

const FeaturedProducts = () => {
	return (
		<>
			<h1 className="text-header text-prime pt-5 text-center">
				Limited Bundles
			</h1>
			<Container>
				<Row>
					<Col>
						<Card style={{ width: "18rem" }}>
							<Card.Img variant="top" src={imgPlaceholder} />
							<Card.Body>
								<Card.Title>Basic Package</Card.Title>
								<Card.Text>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
									sint velit sunt, asperiores at, repellendus vel deleniti omnis
									voluptates nihil odio laborum, rerum harum nesciunt.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default FeaturedProducts;
