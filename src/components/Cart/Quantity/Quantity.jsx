import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./Quantity.css";
import Swal from "sweetalert2";

const Quantity = ({ cartProduct }) => {
	const [quantity, setQuantity] = useState(cartProduct.quantity);

	const [isIncBtnClicked, setIsIncBtnClicked] = useState(false);
	const [isDecBtnClicked, setIsDecBtnClicked] = useState(false);

	const decreaseQuantityHandler = (e) => {
		e.preventDefault();
		setIsDecBtnClicked(true);
		fetch(
			`https://labloco-medical-supplies.herokuapp.com/users/cart/decrease/quantity/${cartProduct.productId}/${cartProduct._id}`,
			{
				method: "PUT",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			}
		)
			.then((response) => response.json())
			.then((result) => {
				if (!result.message.includes("decreased")) {
					Swal.fire({
						title: "ERROR",
						text: `Something went wrong: ${result.message}`,
						icon: "error",
						iconColor: "#17355E",
						confirmButtonColor: "#17355E",
						color: "#17355E",
					});
					setIsDecBtnClicked(false);
				} else {
					setIsDecBtnClicked(false);
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
				setIsDecBtnClicked(false);
			});
	};

	const increaseQuantityHandler = (e) => {
		e.preventDefault();
		setIsIncBtnClicked(true);
		fetch(
			`https://labloco-medical-supplies.herokuapp.com/users/cart/increase/quantity/${cartProduct.productId}/${cartProduct._id}`,
			{
				method: "PUT",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			}
		)
			.then((response) => response.json())
			.then((result) => {
				if (!result.message.includes("increased")) {
					Swal.fire({
						title: "ERROR",
						text: `Something went wrong: ${result.message}`,
						icon: "error",
						iconColor: "#17355E",
						confirmButtonColor: "#17355E",
						color: "#17355E",
					});
					setIsIncBtnClicked(false);
				} else {
					setIsIncBtnClicked(false);
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
				setIsIncBtnClicked(false);
			});
	};

	useEffect(() => {
		setQuantity(cartProduct.quantity);
	}, [cartProduct]);

	return (
		<Container className="d-flex align-items-center gap-2 p-0">
			{isDecBtnClicked ? (
				<button
					disabled
					onClick={decreaseQuantityHandler}
					className="p-0 m-0 quantity-btn quantity-btn-dec"
				>
					-
				</button>
			) : (
				<button
					onClick={decreaseQuantityHandler}
					className="p-0 m-0 quantity-btn quantity-btn-dec"
				>
					-
				</button>
			)}
			<p className="p-0 m-0 text-prime text-content">{quantity}</p>
			{isIncBtnClicked ? (
				<button
					disabled
					onClick={increaseQuantityHandler}
					className="p-0 m-0 quantity-btn quantity-btn-inc"
				>
					+
				</button>
			) : (
				<button
					onClick={increaseQuantityHandler}
					className="p-0 m-0 quantity-btn quantity-btn-inc"
				>
					+
				</button>
			)}
		</Container>
	);
};

export default Quantity;
