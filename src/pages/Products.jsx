import {
	Container,
	Row,
	Col,
	Accordion,
	ListGroup,
	Card,
	Button,
} from "react-bootstrap";

import Categories from "../components/Products/Categories/Categories";
import CategoryProducts from "../components/Products/CategoryProducts/CategoryProducts";

const Products = () => {
	return (
		<>
			<h1 className="display-1 text-header text-prime pt-5 text-center">
				All Products
			</h1>
			<Row className="d-flex justify-content-end pb-5 mb-5">
				<Col xs={12} md={3} className="pt-md-5 ">
					<Categories />
				</Col>

				<Col xs={12} md={9}>
					<CategoryProducts />
				</Col>
				<Col xs={12} md={9}>
					<CategoryProducts />
				</Col>
			</Row>
		</>
	);
};

export default Products;
