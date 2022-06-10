import { useState, useEffect } from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import imgPlaceholder1 from "../../../assets/imgs/featured-product-placeholder-1.png";
import imgPlaceholder2 from "../../../assets/imgs/featured-product-placeholder-2.png";
import { Link } from "react-router-dom";

const CategoryProducts = ({ category, allActiveProducts }) => {
	const [categoryName, setCategoryName] = useState("");
	const [categoryProducts, setCategoryProducts] = useState([]);

	const categoryProductsArr = allActiveProducts
		.filter((product) => {
			return product.categories.find(
				(filteredCategory) => filteredCategory.categoryId === category._id
			);
		})
		.map((mappedProduct) => {
			let img = "";
			if (mappedProduct.image.length) {
				img = `https://labloco-medical-supplies.herokuapp.com/products/image/${mappedProduct._id}`;
			} else {
				img = `https://via.placeholder.com/1000x1000`;
			}
			return (
				<Col
					key={mappedProduct._id}
					className="d-flex justify-content-center"
					sm={5}
					xl={4}
				>
					<Card style={{ maxWidth: "16rem" }}>
						<Card.Img className="bg-white p-3" src={img} />
						<Card.Title className="p-2 text-prime text-subheader">
							{mappedProduct.name}
						</Card.Title>
						<Card.Subtitle className="mb-2 text-muted text-content p-2">
							₱{mappedProduct.price}
						</Card.Subtitle>
						<Button
							as={Link}
							to={`/product/${mappedProduct._id}`}
							className="custom-btn-3 py-2 fs-5"
						>
							View Product
						</Button>
					</Card>
				</Col>
			);
		});

	useEffect(() => {
		setCategoryName(category.name);
		setCategoryProducts(categoryProductsArr);
	}, [allActiveProducts]);

	return (
		<Container id={categoryName} className="py-5 py-md-0">
			<h1 className="display-5 text-header text-prime pt-5 pb-2 text-center text-capitalize">
				{categoryName}
			</h1>
			<Row className="gap-3 justify-content-center">{categoryProducts}</Row>
		</Container>
	);
};

export default CategoryProducts;
