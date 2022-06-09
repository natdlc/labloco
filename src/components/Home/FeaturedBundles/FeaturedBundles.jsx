import { useState, useEffect, useContext } from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import imgPlaceholder from "../../../assets/imgs/featured-bundles-img.png";

import { Link } from "react-router-dom";
import CategoryContext from "../../../CategoryContext";

const FeaturedBundles = ({ allProducts }) => {
	const [displayedBundles, setDisplayedBundles] = useState([]);
	const { allCategories } = useContext(CategoryContext);

	const fetchData = () => {
		const featuredBundle = allCategories.filter(
			(category) => category.name === "featured bundles"
		);

		const productsArr = allProducts.filter((product) => {
			return product.categories.find((category) => {
				return category.categoryId === featuredBundle[0]._id;
			});
		});

		setDisplayedBundles(
			productsArr.map((product) => {
				let img = "";

				if (product.image.length) {
					img = `https://labloco-medical-supplies.herokuapp.com/products/image/${product._id}`;
				} else {
					img = imgPlaceholder;
				}
				return (
					<Col key={product._id} sm={5} xl={4}>
						<Card className="custom-shade-bg-1">
							<Card.Img className="bg-white p-3" src={img} />
							<Button
								as={Link}
								to={`/product/${product._id}`}
								className="custom-btn-3 py-2 fs-5"
							>
								{product.name}
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
		<div className="d-flex flex-column mt-5">
			<h1 className="display-1 text-header text-prime pt-5 text-center">
				Featured Bundles
			</h1>
			<h4 className="text-center mx-auto subheader-custom">
				<span className="text-prime fw-bold">Save more</span> by buying in bulk.
			</h4>
			<Container className="my-5">
				<Row className="gap-5 justify-content-center">{displayedBundles}</Row>
			</Container>
			<Button className="custom-btn-2 mx-auto mt-5 fs-2 px-4">
				See all bundles
			</Button>
		</div>
	);
};

export default FeaturedBundles;
