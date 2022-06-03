import { Table, Button } from "react-bootstrap";
import Quantity from "../components/Cart/Quantity/Quantity";
import Checkout from "../components/Cart/Checkout/Checkout";

const Cart = () => {
	return (
		<>
			<Quantity />
			<Checkout />
		</>
	);
};

export default Cart;
