import { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SummaryItem.css";
import ProductContext from "../../../ProductContext";

const SummaryItem = ({ cartProduct }) => {
	const { allActiveProducts } = useContext(ProductContext);

	const [productName, setProductName] = useState("");
	const [image, setImage] = useState();
	const [quantity, setQuantity] = useState(0);
	const [productSubtotal, setProductSubtotal] = useState(0);

	useEffect(() => {
		if (allActiveProducts.length) {
			const filteredProduct = allActiveProducts.filter(
				(activeProduct) => activeProduct._id === cartProduct.productId
			)[0];
			if (filteredProduct.image.length) {
				setImage(
					`https://labloco-medical-supplies.herokuapp.com/products/image/${filteredProduct._id}`
				);
			} else {
				setImage("https://via.placeholder.com/200x200");
			}
			setProductName(filteredProduct.name);
			setQuantity(cartProduct.quantity);
			setProductSubtotal(filteredProduct.price * cartProduct.quantity);
		}
	}, [cartProduct]);

	return (
		<Container fluid={true} className="p-0 m-0">
			<Row className="p-0 m-0 border-bottom pb-4">
				<Col xs={2} className="p-0 m-0 summary-item-img-col">
					<img
						style={{ width: "6rem" }}
						className="img-fluid p-0 m-0"
						src={image}
						alt=""
					/>
					<p className="summary-item-quantity">{quantity}</p>
				</Col>
				<Col xs={6} className="ps-3 m-0">
					<p className="text-prime text-subheader p-0">{productName}</p>
				</Col>
				<Col xs={4} className="p-0 m-0 text-end">
					<p className="text-prime text-subheader p-0">₱{productSubtotal}</p>
				</Col>
			</Row>
		</Container>
	);
};

export default SummaryItem;
