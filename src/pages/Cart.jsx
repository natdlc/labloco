import { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CartItem from "../components/Cart/CartItem/CartItem";
import Discount from "../components/Cart/Discount/Discount";
import Checkout from "../components/Cart/Checkout/Checkout";
import { Navigate } from "react-router-dom";
import UserContext from "../UserContext";
import CartContext from "../CartContext";
import ProductContext from "../ProductContext";
import Swal from "sweetalert2";

const Cart = () => {
	const { allActiveProducts } = useContext(ProductContext);
	const { fetchedCart, fetchCart } = useContext(CartContext);
	const { user } = useContext(UserContext);
	const [cartItems, setCartItems] = useState([]);

	const mapCartItems = () => {
		const cartItemsArr = fetchedCart.map((product) => {
			const productActive = allActiveProducts.filter(
				(fProduct) => fProduct._id === product.productId
			);
			if (productActive.length)
				return <CartItem key={product._id} cartProduct={product} />;
			else {
				console.log("not active");
				fetch(
					`https://labloco-medical-supplies.herokuapp.com/users/cart/delete/product/${product.productId}/${product._id}`,
					{
						method: "DELETE",
						headers: {
							Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
						},
					}
				)
					.then((response) => response.json())
					.then((result) => {
						if (result.message.includes("removed")) {
							Swal.fire({
								title: "NOTE",
								text: "A product from your cart was recently deactivated, please reach out to support if you have questions",
								icon: "warning",
								iconColor: "#17355E",
								confirmButtonColor: "#17355E",
								color: "#17355E",
							});
							return null;
						} else {
							return null;
						}
					})
					.catch(() => {
						return null;
					});
				// return null;
			}
		});
		setCartItems(cartItemsArr);
	};

	useEffect(() => {
		fetchCart();
		if (fetchedCart.length && allActiveProducts.length) mapCartItems();
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
