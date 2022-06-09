import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Shipping = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Container style={{ maxWidth: "50rem" }} className="pb-5 mb-5">
			<h1 className="display-1 text-header text-prime pt-5 text-center ">
				Shipping Policy
			</h1>
			<h4 className="text-center mx-auto subheader-custom pb-5 pt-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
				repellendus laudantium suscipit maxime eaque aliquid corporis minima
				accusamus eos laboriosam?
			</h4>
			<Row className="gap-3 justify-content-center">
        <Col xs={12} sm={4} lg={3} className="ps-5 ps-sm-0">
					<h4 className="text-subheader display-5 p-0 m-0">Courier 1</h4>
					<p className="text-content fs-5">Nationwide</p>
					<p className="text-content fs-5">5-7 Business Days</p>
					<p className="text-content fs-5">Free</p>
				</Col>
				<Col xs={12} sm={4} lg={3} className="ps-5 ps-sm-0">
					<h4 className="text-subheader display-5 p-0 m-0">Courier 2</h4>
					<p className="text-content fs-5">Within Metro Manila</p>
					<p className="text-content fs-5">1-3 Business Days</p>
					<p className="text-content fs-5">Free</p>
				</Col>
				<Col xs={12} sm={4} lg={3} className="ps-5 ps-sm-0">
					<h4 className="text-subheader display-5 p-0 m-0">Courier 3</h4>
					<p className="text-content fs-5">Nationwide</p>
					<p className="text-content fs-5">3-5 Business Days</p>
					<p className="text-content fs-5">+ ₱70-₱150</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Shipping;
