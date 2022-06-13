import { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";

const Products = ({ allProducts, allOrderProducts }) => {
	const [productsDisplay, setProductsDisplay] = useState([]);

	useEffect(() => {
		const mappedOrderProductIds = allOrderProducts.map(
			(product) => product.productId
		);

		const filteredOrderProducts = allProducts.filter((product) => {
			return mappedOrderProductIds.includes(product._id);
		});

		const productsDisplayArr = filteredOrderProducts.map((specificProduct) => {
			const quantity = allOrderProducts.find((orderProduct) => {
				return orderProduct.productId === specificProduct._id;
			}).quantity;
			let img = "";
			if (specificProduct.image.length) {
				img = `https://labloco-medical-supplies.herokuapp.com/products/image/${specificProduct._id}`;
			} else {
				img = "https://via.placeholder.com/400x400";
			}
			return (
				<div
					key={specificProduct._id}
					className="d-flex gap-4 m-0 p-2 border-prime flex-wrap"
				>
					<div className="m-0 p-0" style={{ maxWidth: "4rem" }}>
						<img src={img} className="img-fluid d-block" alt="" />
					</div>
					<div className="m-0 p-0">
						<p className="m-0 p-0 text-subheader">Product name</p>
						<p className="m-0 p-0">{specificProduct.name}</p>
					</div>
					<div className="m-0 p-0">
						<p className="m-0 p-0 text-subheader">Quantity</p>
						<p className="m-0 p-0">{quantity}</p>
					</div>
					<div className="m-0 p-0">
						<p className="m-0 p-0 text-subheader">Product Price</p>
						<p className="m-0 p-0">₱{specificProduct.price}</p>
					</div>
					<div className="m-0 p-0">
						<p className="m-0 p-0 text-subheader">Subtotal</p>
						<p className="m-0 p-0">₱{specificProduct.price * quantity}</p>
					</div>
				</div>
			);
		});
		setProductsDisplay(productsDisplayArr);
	}, []);
	return (
		<Accordion.Item eventKey="7">
			<Accordion.Header>Products</Accordion.Header>
			<Accordion.Body className="m-0 p-0">{productsDisplay}</Accordion.Body>
		</Accordion.Item>
	);
};

export default Products;
