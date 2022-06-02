import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import logo from "../../assets/icon/labloco.png";
import social1 from "../../assets/icon/fb.png";
import social2 from "../../assets/icon/twitter.png";
import social3 from "../../assets/icon/ig.png";
import "./Footer.css";

const Footer = () => {
	return (
		<Container fluid={true} className="bg-prime pt-5 px-4">
			<Row className="d-flex justify-content-center gap-xxl-3">
				<Col
					xs={12}
					sm={6}
					md={3}
					xl={2}
					xxl={3}
					className="d-flex justify-content-center align-items-center"
				>
					<img
						style={{ maxWidth: "10rem" }}
						className="img-fluid"
						src={logo}
						alt=""
					/>
				</Col>
				<Col xs={12} sm={6} md={5} lg={6} xl={5} xxl={3} className="py-5">
					<p className="text-reverse-prime text-header display-6">
						Quick Links
					</p>
					<Nav>
						<Nav.Item>
							<Nav.Link className="footer-quick-links text-content p-0 pe-3 py-2 text-reverse-prime">
								Home
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="footer-quick-links text-content p-0 pe-3 py-2 text-reverse-prime">
								Products
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="footer-quick-links text-content p-0 pe-3 py-2 text-reverse-prime">
								Register
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="footer-quick-links text-content p-0 pe-3 py-2 text-reverse-prime">
								Login
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="footer-quick-links text-content p-0 pe-3 py-2 text-reverse-prime">
								Account
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="footer-quick-links text-content p-0 pe-3 py-2 text-reverse-prime">
								Contact
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="footer-quick-links text-content p-0 pe-3 py-2 text-reverse-prime">
								Shipping
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="footer-quick-links text-content p-0 pe-3 py-2 text-reverse-prime">
								FAQs
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="footer-quick-links text-content p-0 pe-3 py-2 text-reverse-prime">
								Privacy
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="footer-quick-links text-content p-0 pe-3 py-2 text-reverse-prime">
								Terms
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="footer-quick-links text-content p-0 pe-3 py-2 text-reverse-prime">
								Cart
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="footer-quick-links text-content p-0 pe-3 py-2 text-reverse-prime">
								Logout
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>
				<Col
					xs={12}
					sm={6}
					md={3}
					lg={3}
					xl={3}
					xxl={2}
					className="d-flex flex-column text-sm-center text-md-start py-md-5"
				>
					<p className="text-header text-reverse-prime display-6">Contact Us</p>
					<p className="footer-contact_info text-reverse-prime text-content">
						labloco@support.com
					</p>
					<p className="footer-contact_info text-reverse-prime text-content">
						+63-912-345-6789
					</p>
				</Col>
				<Col
					xs={12}
					sm={6}
					xl={6}
					xxl={4}
					className="py-5 py-sm-0 my-md-5 text-md-center"
				>
					<p className="text-header text-reverse-prime display-6">Follow Us</p>
					<div className="d-flex gap-3 justify-content-md-center">
						<div className="footer-social_wrapper" style={{maxWidth: "40px"}}>
							<img className="img-fluid" src={social1} alt="facebook logo" />
						</div>
						<div className="footer-social_wrapper" style={{maxWidth: "40px"}}>
							<img className="img-fluid" src={social2} alt="twitter logo" />
						</div>
						<div className="footer-social_wrapper" style={{maxWidth: "40px"}}>
							<img className="img-fluid" src={social3} alt="instagram logo" />
						</div>
					</div>
				</Col>
				<Col xs={12} sm={6} xl={6} xxl={4} className="my-5 mx-sm-auto mx-xl-0">
					<Form>
						<Form.Label className="footer-form_label display-6 text-reverse-prime text-header">
							Join our Newsletter
						</Form.Label>
						<p className="text-reverse-prime text-content">
							Get the latest discounts through your email
						</p>
						<Form.Group>
							<Form.Control
								style={{ maxWidth: "15rem" }}
								className="newsletter-email-input mb-2"
								id="footer-email-input"
								type="email"
								placeholder="Enter Email"
							></Form.Control>
							<p className="text-muted-reverse-prime text-content">
								We'll never send you spam emails.
							</p>
						</Form.Group>
						<Button className="custom-btn-3">Submit</Button>
					</Form>
				</Col>
				<Col xs={12} className="mt-5 text-center">
					<p className="footer-rights m-0 text-muted-reverse-prime text-header">
						All rights reserved
					</p>
					<p className="footer-rights m-0 text-muted-reverse-prime text-header">
						LabLoco - Low Cost Lab On Motion
					</p>
					<p className="footer-rights m-0 text-muted-reverse-prime text-header">
						Website by Nat C.
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
