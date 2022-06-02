import { Container, Col, Row, Button } from "react-bootstrap";
import icon1 from "../../../assets/icon/shipping.png";
import icon2 from "../../../assets/icon/quality-products.png";
import icon3 from "../../../assets/icon/customer-service.png";

const HomeBenefits = () => {
	return (
		<div className="mt-5 pt-5">
			<h1 className="text-prime display-1 text-header text-center mt-5 pt-5">
				Benefits in choosing us
			</h1>
			<h4 className="text-center mx-auto">
				Find out why our customers order from us.
			</h4>
			<Container>
				<Row className="d-flex gap-3 gap-md-1">
					<Col
						xs={11}
						sm={8}
						md={3}
						className="d-flex flex-column gap-3 mx-auto my-5"
					>
						<h2 className="display-5 text-prime">Reliable Shipping</h2>
						<div
							className="benefits-logo-wrapper"
							style={{ maxWidth: "16rem" }}
						>
							<img className="img-fluid" src={icon1} />
						</div>
						<div className="benefits-text-wrapper">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
								sit temporibus rem sint cupiditate suscipit non, fugit
								accusantium veniam dolore.
							</p>
							<Button className="custom-btn-3">Shipping Policy</Button>
						</div>
					</Col>
					<Col
						xs={11}
						sm={8}
						md={3}
						className="d-flex flex-column gap-3 mx-auto my-5"
					>
						<h2 className="display-5 text-prime">Quality Products</h2>
						<div
							className="benefits-logo-wrapper"
							style={{ maxWidth: "16rem" }}
						>
							<img className="img-fluid" src={icon2} />
						</div>
						<div className="benefits-text-wrapper">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
								sit temporibus rem sint cupiditate suscipit non, fugit
								accusantium veniam dolore.
							</p>
							<Button className="custom-btn-3">All Products</Button>
						</div>
					</Col>
					<Col
						xs={11}
						sm={8}
						md={3}
						className="d-flex flex-column gap-3 mx-auto my-5"
					>
						<h2 className="display-5 text-prime">Customer Service</h2>
						<div
							className="benefits-logo-wrapper"
							style={{ maxWidth: "16rem" }}
						>
							<img className="img-fluid" src={icon3} />
						</div>
						<div className="benefits-text-wrapper">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
								sit temporibus rem sint cupiditate suscipit non, fugit
								accusantium veniam dolore.
							</p>
							<Button className="custom-btn-3">Contact Us</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default HomeBenefits;
