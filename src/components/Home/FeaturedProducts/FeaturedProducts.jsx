import { Container, Row, Col, Card, Button } from "react-bootstrap";
import imgPlaceholder1 from "../../../assets/imgs/featured-product-placeholder-1.png";
import imgPlaceholder2 from "../../../assets/imgs/featured-product-placeholder-2.png";

const FeaturedBundles = () => {
	return (
		<div className="d-flex flex-column my-5 py-5">
			<h1 className="display-1 text-header text-prime pt-5 text-center">
				Featured Products
			</h1>
			<h4 className="text-center mx-auto subheader-custom">
				Trending items you shouldn't miss out on
			</h4>
			<Container className="my-5">
				<Row className="gap-5 justify-content-center">
					<Col sm={5} xl={4}>
						<Card className="">
							<Card.Img className="bg-white p-3" src={imgPlaceholder1} />
							<Card.Title className="p-2 text-prime text-subheader">
								Medical Mask
							</Card.Title>
							<Card.Subtitle className="mb-2 text-muted text-content p-2">
								₱25
							</Card.Subtitle>
							<Button className="custom-btn-3 py-2 fs-5">View Product</Button>
						</Card>
					</Col>
					<Col sm={5} xl={4}>
						<Card className="">
							<Card.Img className="bg-white p-3" src={imgPlaceholder2} />
							<Card.Title className="p-2 text-prime text-subheader">
								Medical Syringe
							</Card.Title>
							<Card.Subtitle className="mb-2 text-muted text-content p-2">
								₱50
							</Card.Subtitle>
							<Button className="custom-btn-3 py-2 fs-5">View Product</Button>
						</Card>
					</Col>
					<Col sm={5} xl={4}>
						<Card className="">
							<Card.Img className="bg-white p-3" src={imgPlaceholder1} />
							<Card.Title className="p-2 text-prime text-subheader">
								Medical Mask
							</Card.Title>
							<Card.Subtitle className="mb-2 text-muted text-content p-2">
								₱25
							</Card.Subtitle>
							<Button className="custom-btn-3 py-2 fs-5">View Product</Button>
						</Card>
					</Col>
					<Col sm={5} xl={4}>
						<Card className="">
							<Card.Img className="bg-white p-3" src={imgPlaceholder2} />
							<Card.Title className="p-2 text-prime text-subheader">
								Medical Syringe
							</Card.Title>
							<Card.Subtitle className="mb-2 text-muted text-content p-2">
								₱50
							</Card.Subtitle>
							<Button className="custom-btn-3 py-2 fs-5">View Product</Button>
						</Card>
					</Col>
				</Row>
			</Container>
			<Button className="custom-btn-2 mx-auto mt-5 fs-2 px-4 mb-5">
				See all products
			</Button>
		</div>
	);
};

export default FeaturedBundles;
