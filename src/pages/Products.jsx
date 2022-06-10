import { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Categories from "../components/Products/Categories/Categories";
import CategoryProducts from "../components/Products/CategoryProducts/CategoryProducts";

import ProductContext from "../ProductContext";
import CategoryContext from "../CategoryContext";

const Products = () => {
	const { allActiveProducts, fetchAllActiveProducts } =
		useContext(ProductContext);
	const { allActiveCategories, fetchActiveCategories } =
		useContext(CategoryContext);
	const [categoryProducts, setCategoryProducts] = useState([]);

	useEffect(() => {
		fetchAllActiveProducts();
		fetchActiveCategories();
		setCategoryProducts(
			allActiveCategories.map((category) => {
				return (
					<CategoryProducts
						key={category._id}
						category={category}
						allActiveProducts={allActiveProducts}
					/>
				);
			})
		);
	}, [allActiveProducts, allActiveCategories]);

	return (
		<Container className="pb-5">
			<h1 className="display-1 text-header text-prime pt-5 pb-3 text-center">
				All Products
			</h1>
			<Row className="d-flex">
				<Col xs={12} md={3} lg={2} className="">
					<h4 className="text-center mx-auto text-header text-prime">
						Categories
					</h4>
					<Categories allActiveCategories={allActiveCategories} />
				</Col>

				<Col xs={12} md={9} lg={8}>
					{categoryProducts}
				</Col>
			</Row>
		</Container>
	);
};

export default Products;
