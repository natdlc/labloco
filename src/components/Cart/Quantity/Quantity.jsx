import { Container } from "react-bootstrap";
import "./Quantity.css";

const Quantity = ({cartProduct}) => {
	return (
		<Container className="d-flex align-items-center gap-2 p-0">
			<button className="p-0 m-0 quantity-btn quantity-btn-dec">-</button>
			<p className="p-0 m-0 text-prime text-content">{cartProduct.quantity}</p>
			<button className="p-0 m-0 quantity-btn quantity-btn-inc">+</button>
		</Container>
	);
};

export default Quantity;
