import { Container, Row, Col, Card, Button } from "react-bootstrap";
import imgPlaceholder from "../../../assets/imgs/featured-bundles-img.png";

const FeaturedBundles = () => {
	return (
		<div className="d-flex flex-column mt-5">
			<h1 className="display-1 text-header text-prime pt-5 text-center">
				Featured Bundles
			</h1>
			<h4 className="text-center mx-auto subheader-custom">
				<span className="text-prime fw-bold">Save more</span> by buying in bulk.
			</h4>
			<Container className="my-5">
				<Row className="gap-5 justify-content-center">
					<Col sm={5} xl={4}>
						<Card className="custom-shade-bg-1">
							<Card.Img className="bg-white p-3" src={imgPlaceholder} />
							<Button className="custom-btn-3 py-2 fs-5">BASIC</Button>
						</Card>
					</Col>
					<Col sm={5} xl={4}>
						<Card className="custom-shade-bg-1">
							<Card.Img className="bg-white p-3" src={imgPlaceholder} />
							<Button className="custom-btn-3 py-2 fs-5">BARKADA</Button>
						</Card>
					</Col>
				</Row>
			</Container>
			<Button className="custom-btn-2 mx-auto mt-5 fs-2 px-4">
				See all bundles
			</Button>
		</div>
	);
};

export default FeaturedBundles;
