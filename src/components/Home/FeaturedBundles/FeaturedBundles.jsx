import { useState, useEffect } from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import imgPlaceholder from "../../../assets/imgs/featured-bundles-img.png";

import { Link } from "react-router-dom";

const FeaturedBundles = () => {
	const [bundles, setBundles] = useState([]);

	const fetchData = () => {
		fetch("https://labloco-medical-supplies.herokuapp.com/categories/active")
			.then((response) => response.json())
			.then((categories) => {
				const featuredBundle = categories.filter(
					(category) => category.name === "featured bundles"
				);
				fetch(
					`https://labloco-medical-supplies.herokuapp.com/categories/active/${featuredBundle[0]._id}`
				)
					.then((response) => response.json())
					.then((bundles) => {
						const bundlesArr = bundles.map((bundle) => {
							let img = "";
							if (bundle.image.length) {
								img = `https://labloco-medical-supplies.herokuapp.com/products/image/${bundle._id}`;
							} else {
								img = imgPlaceholder;
							}
							return (
								<Col key={bundle._id} sm={5} xl={4}>
									<Card className="custom-shade-bg-1">
										<Card.Img className="bg-white p-3" src={img} />
										<Button as={Link} to={`/product/${bundle._id}`} className="custom-btn-3 py-2 fs-5">
											{bundle.name}
										</Button>
									</Card>
								</Col>
							);
						});
						setBundles(bundlesArr);
					});
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="d-flex flex-column mt-5">
			<h1 className="display-1 text-header text-prime pt-5 text-center">
				Featured Bundles
			</h1>
			<h4 className="text-center mx-auto subheader-custom">
				<span className="text-prime fw-bold">Save more</span> by buying in bulk.
			</h4>
			<Container className="my-5">
				<Row className="gap-5 justify-content-center">{bundles}</Row>
			</Container>
			<Button className="custom-btn-2 mx-auto mt-5 fs-2 px-4">
				See all bundles
			</Button>
		</div>
	);
};

export default FeaturedBundles;
