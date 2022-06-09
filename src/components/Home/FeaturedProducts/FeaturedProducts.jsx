import { useState, useEffect } from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

const FeaturedBundles = () => {
	const [products, setProducts] = useState([]);

	const fetchData = () => {
		fetch("https://labloco-medical-supplies.herokuapp.com/categories/active")
			.then((response) => response.json())
			.then((categories) => {
				const featuredProduct = categories.filter(
					(category) => category.name === "featured products"
				);
				fetch(
					`https://labloco-medical-supplies.herokuapp.com/categories/active/${featuredProduct[0]._id}`
				)
					.then((response) => response.json())
					.then((products) => {
						const productsArr = products.map((product) => {
							let img = "";
							if (product.image.length) {
								img = `https://labloco-medical-supplies.herokuapp.com/products/image/${product._id}`;
							} else {
								img = `https://via.placeholder.com/1000x1000`;
							}
							return (
								<Col key={product._id} sm={5} xl={4}>
									<Card>
										<Card.Img className="bg-white p-3" src={img} />
										<Card.Title className="p-2 text-prime text-subheader">
											{product.name}
										</Card.Title>
										<Card.Subtitle className="mb-2 text-muted text-content p-2">
											₱{product.price}
										</Card.Subtitle>
										<Button className="custom-btn-3 py-2 fs-5">
											View Product
										</Button>
									</Card>
								</Col>
							);
						});
						setProducts(productsArr);
					});
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="d-flex flex-column my-5 py-5">
			<h1 className="display-1 text-header text-prime pt-5 text-center">
				Featured Products
			</h1>
			<h4 className="text-center mx-auto subheader-custom">
				Trending items you shouldn't miss out on
			</h4>
			<Container className="my-5">
				<Row className="gap-5 justify-content-center">{products}</Row>
			</Container>
			<Button className="custom-btn-2 mx-auto mt-5 fs-2 px-4 mb-5">
				See all products
			</Button>
		</div>
	);
};

export default FeaturedBundles;
