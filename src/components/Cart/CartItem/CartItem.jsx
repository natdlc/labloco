import { Row, Col } from "react-bootstrap";
import ItemImage from "../ItemImage/ItemImage";
import ItemDetails from "../ItemDetails/ItemDetails";

const CartItem = ({ cartProduct }) => {
	return (
		<Row className="d-flex justify-content-center border-bottom pb-4">
			<Col xs={4} sm={2} className="d-flex align-items-center">
				<ItemImage productId={cartProduct.productId} />
			</Col>
			<Col xs={8}>
				<ItemDetails cartProduct={cartProduct} />
			</Col>
		</Row>
	);
};

export default CartItem;
