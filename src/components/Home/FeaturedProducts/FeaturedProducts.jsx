import { useState, useEffect, useContext } from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CategoryContext from "../../../CategoryContext";
import { Link } from "react-router-dom";

const FeaturedBundles = ({ allProducts }) => {
	const [displayedProducts, setDisplayedProducts] = useState([]);
	const { allCategories } = useContext(CategoryContext);

	const fetchData = () => {
		const featuredProductsId = allCategories.filter(
			(category) => category.name === "featured products"
		)[0]._id;

		const productsArr = allProducts.filter((product) => {
			return product.categories.find((category) => {
				return category.categoryId === featuredProductsId;
			});
		});

		setDisplayedProducts(
			productsArr.map((product) => {
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
							<Button
								as={Link}
								to={`/product/${product._id}`}
								className="custom-btn-3 py-2 fs-5"
							>
								View Product
							</Button>
						</Card>
					</Col>
				);
			})
		);
	};

	useEffect(() => {
		fetchData();
	}, [allProducts]);

	return (
		<div className="d-flex flex-column my-5 py-5">
			<h1 className="display-1 text-header text-prime pt-5 text-center">
				Featured Products
			</h1>
			<h4 className="text-center mx-auto subheader-custom">
				Trending items you shouldn't miss out on
			</h4>
			<Container className="my-5">
				<Row className="gap-5 justify-content-center">{displayedProducts}</Row>
			</Container>
			<Button className="custom-btn-2 mx-auto mt-5 fs-2 px-4 mb-5">
				See all products
			</Button>
		</div>
	);
};

export default FeaturedBundles;
