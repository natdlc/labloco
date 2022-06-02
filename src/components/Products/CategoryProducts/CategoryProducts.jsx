import { Container, Row, Col, Card, Button } from "react-bootstrap";
import imgPlaceholder1 from "../../../assets/imgs/featured-product-placeholder-1.png";
import imgPlaceholder2 from "../../../assets/imgs/featured-product-placeholder-2.png";
import { Link } from "react-router-dom";

const CategoryProducts = () => {
	return (
		<Container id="category-1" className="py-5 py-md-0">
			<h1 className="display-5 text-header text-prime pt-5 pb-2 text-center">
				Category 1
			</h1>
			<Row className="gap-3 justify-content-center">
				<Col className="d-flex justify-content-center" sm={5} xl={4}>
					<Card style={{ maxWidth: "16rem" }} className="">
						<Card.Img className="bg-white p-3" src={imgPlaceholder1} />
						<Card.Title className="p-2 text-prime text-subheader">
							Medical Mask
						</Card.Title>
						<Card.Subtitle className="mb-2 text-muted text-content p-2">
							₱25
						</Card.Subtitle>
						<Button as={ Link} to="/product" className="custom-btn-3 py-2 fs-5">View Product</Button>
					</Card>
				</Col>
				<Col className="d-flex justify-content-center" sm={5} xl={4}>
					<Card style={{ maxWidth: "16rem" }} className="">
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
				<Col className="d-flex justify-content-center" sm={5} xl={4}>
					<Card style={{ maxWidth: "16rem" }} className="">
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
				<Col className="d-flex justify-content-center" sm={5} xl={4}>
					<Card style={{ maxWidth: "16rem" }} className="">
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
	);
};

export default CategoryProducts;
