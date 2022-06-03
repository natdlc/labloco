import { Container, Row, Col } from "react-bootstrap";

import Categories from "../components/Products/Categories/Categories";
import CategoryProducts from "../components/Products/CategoryProducts/CategoryProducts";

const Products = () => {
	return (
		<Container>
			<h1 className="display-1 text-header text-prime pt-5 pb-3 text-center">
				All Products
			</h1>
			<Row className="d-flex">
				<Col xs={12} md={3} lg={2} className="">
					<h4 className="text-center mx-auto text-header text-prime">
						Categories
					</h4>
					<Categories />
				</Col>

				<Col xs={12} md={9} lg={8}>
					<CategoryProducts />
					<CategoryProducts />
				</Col>
			</Row>
		</Container>
	);
};

export default Products;
