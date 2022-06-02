import {
	Navbar,
	Container,
	Offcanvas,
	Nav,
	Form,
	FormControl,
	Button,
} from "react-bootstrap";
import "./AppNav.css";

const AppNav = () => {
	return (
		<Navbar expand="xl" className="app-nav sticky-top">
			<Container fluid>
				<Navbar.Brand className="logo text-header" href="#">
					LabLoco
				</Navbar.Brand>
				<Navbar.Toggle
					className="toggle"
					aria-controls={`offcanvasNavbar-expand-md`}
				/>
				<Navbar.Offcanvas
					id={`offcanvasNavbar-expand-md`}
					aria-labelledby={`offcanvasNavbarLabel-expand-md`}
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title
							className="off-white text-header"
							id={`offcanvasNavbarLabel-expand-md`}
						>
							Menu
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							<Nav.Link className="off-white text-content" href="#action1">
								Home
							</Nav.Link>
							<Nav.Link className="off-white text-content" href="#action2">
								Products
							</Nav.Link>
							<Nav.Link className="off-white text-content" href="#action2">
								Register
							</Nav.Link>
							<Nav.Link className="off-white text-content" href="#action2">
								Login
							</Nav.Link>
							<Nav.Link className="off-white text-content" href="#action2">
								Account
							</Nav.Link>
							<Nav.Link className="off-white text-content" href="#action2">
								Contact
							</Nav.Link>
							<Nav.Link className="off-white text-content" href="#action2">
								Shipping
							</Nav.Link>
							<Nav.Link className="off-white text-content" href="#action2">
								FAQs
							</Nav.Link>
							<Nav.Link className="off-white text-content" href="#action2">
								Cart
							</Nav.Link>
							<Nav.Link className="off-white text-content" href="#action2">
								Logout
							</Nav.Link>
						</Nav>
						<Form className="d-flex">
							<FormControl
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button className="custom-btn-1">Search</Button>
						</Form>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default AppNav;
