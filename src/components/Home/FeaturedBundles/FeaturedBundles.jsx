import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./FeaturedBundles.css";
import imgPlaceholder from "../../../assets/imgs/featured-bundles-img.png";

const FeaturedBundles = () => {
	return (
		<>
			<h1 className="text-header text-prime pt-5 text-center">
				Featured Bundles
			</h1>
			<p className="text-center mx-auto subheader-custom">
				Save more by buying in bulk
			</p>
			<Container>
				<Row className="gap-5">
					<Col>
						<Card className="custom-shade-bg-1 mx-auto" style={{ width: "18rem" }}>
							<Card.Img className="bg-white p-3" src={imgPlaceholder} />
							<Button className="custom-btn-2 py-3 fs-4">BASIC</Button>
						</Card>
					</Col>
					<Col>
						<Card className="custom-shade-bg-1 mx-auto" style={{ width: "18rem" }}>
							<Card.Img className="bg-white p-3" src={imgPlaceholder} />
							<Button className="custom-btn-2 py-3 fs-4">STANDARD</Button>
						</Card>
					</Col>
					<Col>
						<Card className="custom-shade-bg-1 mx-auto" style={{ width: "18rem" }}>
							<Card.Img className="bg-white p-3" src={imgPlaceholder} />
							<Button className="custom-btn-2 py-3 fs-4">PRO</Button>
						</Card>
					</Col>
					<Col>
						<Card className="custom-shade-bg-1 mx-auto" style={{ width: "18rem" }}>
							<Card.Img className="bg-white p-3" src={imgPlaceholder} />
							<Button className="custom-btn-2 py-3 fs-4">BARKADA</Button>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default FeaturedBundles;
