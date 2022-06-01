import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./FeaturedBundles.css";
import imgPlaceholder from "../../../assets/imgs/featured-bundles-img.png";

const FeaturedBundles = () => {
	return (
		<div className="d-flex flex-column">
			<h1 className="text-header text-prime pt-5 text-center">
				Featured Bundles
			</h1>
			<p className="text-center mx-auto subheader-custom">
				<span className="text-prime fw-bold">Save more</span> by buying in bulk
			</p>
			<Container>
				<Row className="gap-5 justify-content-center">
					<Col lg={5} xl={4}>
						<Card className="custom-shade-bg-1">
							<Card.Img className="bg-white p-3" src={imgPlaceholder} />
							<Button className="custom-btn-2 py-3 fs-4">BASIC</Button>
						</Card>
					</Col>
					<Col lg={5} xl={4}>
						<Card className="custom-shade-bg-1">
							<Card.Img className="bg-white p-3" src={imgPlaceholder} />
							<Button className="custom-btn-2 py-3 fs-4">BARKADA</Button>
						</Card>
					</Col>
				</Row>
			</Container>
			<Button className="custom-btn-2 mx-auto mt-4">See all bundles</Button>
		</div>
	);
};

export default FeaturedBundles;
