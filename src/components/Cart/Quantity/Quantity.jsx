import { Container } from "react-bootstrap";
import "./Quantity.css";

const Quantity = () => {
	return (
		<Container className="d-flex align-items-center gap-2 p-0">
			<p className="p-0 m-0 quantity-btn quantity-btn-dec">-</p>
			<p className="p-0 m-0 text-prime text-content">5</p>
			<p className="p-0 m-0 quantity-btn quantity-btn-inc">+</p>
		</Container>
	);
};

export default Quantity;
