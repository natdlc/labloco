import { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CartItem from "../components/Cart/CartItem/CartItem";
import Discount from "../components/Cart/Discount/Discount";
import Checkout from "../components/Cart/Checkout/Checkout";
import { Navigate } from "react-router-dom";
import UserContext from "../UserContext";
import CartContext from "../CartContext";

const Cart = () => {
	const { fetchedCart, fetchCart } = useContext(CartContext);
	const { user } = useContext(UserContext);
	const [cartItems, setCartItems] = useState([]);

	const cartItemsArr = fetchedCart.map((product) => {
		return <CartItem key={product._id} cartProduct={product} />;
	});

	useEffect(() => {
		fetchCart();
		setCartItems(cartItemsArr);
	}, [fetchedCart]);
	return user.accessToken && !user.isAdmin ? (
		<>
			<h1 className="display-1 text-header text-prime pt-5 pb-3 text-center">
				Your Cart
			</h1>
			<Container
				className="d-flex flex-column gap-3 gap-md-5 align-items-center"
				style={{ maxWidth: "28rem" }}
			>
				{cartItems}
			</Container>
			<Container
				className="d-flex flex-column pt-4 pb-5 mb-5"
				style={{ maxWidth: "28rem" }}
			>
				<Row className="gap-3">
					<Discount />
					<Checkout />
				</Row>
			</Container>
		</>
	) : user.isAdmin ? (
		<Navigate to={"/404"} />
	) : (
		<Navigate to={"/login"} />
	);
};

export default Cart;
