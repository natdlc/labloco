import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
	return (
		<Container style={{ maxWidth: "40rem" }} className="pb-5 mb-5">
			<h1 className="display-1 text-header text-prime pt-5 text-center ">
				Contact Us
			</h1>
			<h4 className="text-center mx-auto subheader-custom pb-5">
				We're always ready to answer any of your questions. Feel free to reach
				out to us through the channels below.
			</h4>
			<Row className="gap-3">
				<Col xs={12} lg={5}>
					<h4 className="text-subheader display-5 p-0 m-0">Email</h4>
					<p className="text-content fs-5">labloco@support.com</p>
				</Col>
				<Col xs={12} lg={5}>
					<h4 className="text-subheader display-5 p-0 m-0">Mobile</h4>
					<p className="text-content fs-5">+63-912-345-6789</p>
				</Col>
				<Col xs={12} lg={5}>
					<h4 className="text-subheader display-5 p-0 m-0">Facebook</h4>
					<a
						className="text-content fs-5 text-prime"
						target="_BLANK"
						href="https://www.facebook.com/LABLoCoMed/"
					>
						fb.com/lablocomed
					</a>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
