import { Container, Row, Col, Accordion } from "react-bootstrap";
import Users from "../components/Admin/Users/Users";
import Products from "../components/Admin/Products/Products";
import Orders from "../components/Admin/Orders/Orders";
import Categories from "../components/Admin/Categories/Categories";
import Newsletters from "../components/Admin/Newsletters/Newsletters";
import Couriers from "../components/Admin/Couriers/Couriers";

const Admin = () => {
	return (
		<Container style={{ maxWidth: "30rem" }} className="py-5 my-5">
			<h1 className="display-5 text-prime text-header">Admin Dashboard</h1>
			<Row>
				<Col>
					<Accordion>
						<Accordion.Item eventKey="0">
							<Accordion.Header>Users</Accordion.Header>
							<Accordion.Body className="p-0 m-0">
								<Users />
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>Products</Accordion.Header>
							<Accordion.Body className="p-0 m-0">
								<Products />
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>Orders</Accordion.Header>
							<Accordion.Body className="p-0 m-0">
								<Orders />
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>Categories</Accordion.Header>
							<Accordion.Body className="p-0 m-0">
								<Categories />
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>Newsletters</Accordion.Header>
							<Accordion.Body className="p-0 m-0">
								<Newsletters />
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>Couriers</Accordion.Header>
							<Accordion.Body className="p-0 m-0">
								<Couriers />
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="7">
							<Accordion.Header>Discounts</Accordion.Header>
							<Accordion.Body className="p-0 m-0">
								Discounts options
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
};

export default Admin;
