import { useContext } from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import "./AppNav.css";
import { Link } from "react-router-dom";
import UserContext from "../../UserContext";
import cart from "../../assets/icon/cart.png";

const AppNav = () => {
	const { user } = useContext(UserContext);
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
						<Nav className="flex-grow-1 pe-3 d-flex justify-content-end">
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
								to="/about"
								className="off-white text-content"
							>
								About
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
							{user.accessToken !== null ? (
								<>
									<Nav.Link
										as={Link}
										to="/profile"
										className="off-white text-content"
									>
										Account
									</Nav.Link>
									<Nav.Link
										as={Link}
										to="/logout"
										className="off-white text-content"
									>
										Logout
									</Nav.Link>
									{user.isAdmin ? (
										true
									) : (
										<Nav.Link
											as={Link}
											to="/cart"
											className="off-white text-content p-0 m-0"
										>
											<div style={{ maxWidth: "40px" }}>
												<img
													className="img-fluid d-block p-1"
													src={cart}
													alt="cart icon"
												/>
											</div>
										</Nav.Link>
									)}
								</>
							) : (
								<>
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
								</>
							)}
							{user.isAdmin ? (
								<Nav.Link
									as={Link}
									to="/admin"
									className="off-white text-content"
								>
									Admin
								</Nav.Link>
							) : (
								false
							)}
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default AppNav;
