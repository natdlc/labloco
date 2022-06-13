import { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Quantity from "../Quantity/Quantity";
import "./ItemDetails.css";
import ProductContext from "../../../ProductContext";
import CartContext from "../../../CartContext";
import Swal from "sweetalert2";

const ItemDetails = ({ cartProduct }) => {
	const { fetchedCart } = useContext(CartContext);
	const { allActiveProducts } = useContext(ProductContext);
	const [productName, setProductName] = useState("");
	const [productSubtotal, setProductSubtotal] = useState(0);
	const [isBtnClicked, setIsBtnClicked] = useState(false);
	const [productInfo, setProductInfo] = useState({});

	const delFromCartHandler = (e) => {
		e.preventDefault();
		if (fetchedCart.length) {
		}
		setIsBtnClicked(true);
		fetch(
			`https://labloco-medical-supplies.herokuapp.com/users/cart/delete/product/${cartProduct.productId}/${cartProduct._id}`,
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
						title: "SUCCESS",
						text: "Product removed",
						icon: "success",
						iconColor: "#17355E",
						confirmButtonColor: "#17355E",
						color: "#17355E",
					});
					setIsBtnClicked(false);
				} else {
					Swal.fire({
						title: "ERROR",
						text: `Something went wrong: ${result.message}`,
						icon: "error",
						iconColor: "#17355E",
						confirmButtonColor: "#17355E",
						color: "#17355E",
					});
					setIsBtnClicked(false);
				}
			})
			.catch((err) => {
				Swal.fire({
					title: "ERROR",
					text: `Something went wrong: ${err.message}`,
					icon: "error",
					iconColor: "#17355E",
					confirmButtonColor: "#17355E",
					color: "#17355E",
				});
				setIsBtnClicked(false);
			});
	};

	useEffect(() => {
		const filteredProduct = allActiveProducts.filter(
			(fProduct) => fProduct._id === cartProduct.productId
		)[0];
		setProductInfo(filteredProduct);
		setProductName(filteredProduct.name);
		setProductSubtotal(filteredProduct.price * cartProduct.quantity);
	}, [fetchedCart]);
	return (
		<Container className="p-0 pe-2 d-flex flex-column justify-content-between">
			<Row>
				<Col xs={7} className="p-0">
					<p className="fs-6 text-truncate text-prime text-subheader">
						{productName}
					</p>
				</Col>
				<Col xs={5} className="p-0 text-end">
					{isBtnClicked ? (
						<button
							disabled
							onClick={delFromCartHandler}
							className="cart-item-del-btn text-muted"
						>
							✖
						</button>
					) : (
						<button
							onClick={delFromCartHandler}
							className="cart-item-del-btn text-muted"
						>
							✖
						</button>
					)}
				</Col>
			</Row>
			<Row>
				<Col xs={7} className="p-0">
					<Quantity cartProduct={cartProduct} productInfo={productInfo} />
				</Col>
				<Col xs={5} className="p-0 text-end">
					<p className="fs-6 text-prime text-subheader">₱{productSubtotal}</p>
				</Col>
			</Row>
		</Container>
	);
};

export default ItemDetails;
