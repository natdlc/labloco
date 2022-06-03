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
import { Link } from "react-router-dom";

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
							<Nav.Link as={Link} to="/" className="off-white text-content">
								Home
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="/collections"
								className="off-white text-content"
							>
								Products
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="/register"
								className="off-white text-content"
							>
								Register
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="/login"
								className="off-white text-content"
							>
								Login
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="/profile"
								className="off-white text-content"
							>
								Account
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="/contact"
								className="off-white text-content"
							>
								Contact
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="/shipping"
								className="off-white text-content"
							>
								Shipping
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="/cart"
								className="off-white text-content"
							>
								Cart
							</Nav.Link>
							<Nav.Link className="off-white text-content">Logout</Nav.Link>
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
