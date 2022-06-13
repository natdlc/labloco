import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Summary from "../components/Checkout/Summary/Summary";
import PayMethod from "../components/Checkout/PayMethod/PayMethod";
import Shipping from "../components/Checkout/Shipping/Shipping";
import OrderForm from "../components/Checkout/OrderForm/OrderForm";
import { CheckoutProvider } from "../components/Checkout/CheckoutContext";

import DiscountContext from "../DiscountContext";
import CartContext from "../CartContext";

import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

const Checkout = () => {
	const navigate = useNavigate();
	const { fetchCart, fetchedCart } = useContext(CartContext);
	const { discountSelected, setDiscountSelected } = useContext(DiscountContext);

	const [discountId, setDiscountId] = useState("");
	const [paymentMethod, setPaymentMethod] = useState("");
	const [courierId, setCourierId] = useState("");
	const [courierPrice, setCourierPrice] = useState(0);
	const [shippingInfo, setShippingInfo] = useState("");
	const [comments, setComments] = useState("");
	const [totalBeforeShipping, setTotalBeforeShipping] = useState(0);

	const [formValid, setFormValid] = useState(false);

	const [total, setTotal] = useState(0);

	const [isBtnActive, setIsBtnActive] = useState(true);

	useEffect(() => {
		if (discountSelected.length) setDiscountId(discountSelected[0]._id);
		else setDiscountId("");
	}, [paymentMethod, courierId, shippingInfo, discountSelected]);

	useEffect(() => {
		fetchCart();
		if (courierPrice) setTotal(totalBeforeShipping + courierPrice);
		else setTotal(0);
	}, [fetchedCart]);

	const checkoutHandler = (e) => {
		e.preventDefault();
		setIsBtnActive(false);
		if (discountId) {
			fetch(
				`https://labloco-medical-supplies.herokuapp.com/orders/new/${discountId}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
					},
					body: JSON.stringify({
						courierId,
						paymentMethod,
						comments,
						shippingInfo: JSON.stringify(shippingInfo),
					}),
				}
			)
				.then((response) => response.json())
				.then((result) => {
					if (result.message.includes("success")) {
						Swal.fire({
							title: "SUCCESS",
							text: "Order complete!",
							icon: "success",
							iconColor: "#17355E",
							confirmButtonColor: "#17355E",
							color: "#17355E",
						});
					} else {
						Swal.fire({
							title: "ERROR",
							text: "Something went wrong. Please reach out to support.",
							icon: "error",
							iconColor: "#17355E",
							confirmButtonColor: "#17355E",
							color: "#17355E",
						});
					}
					setDiscountId("");
					setPaymentMethod("");
					setCourierId("");
					setCourierPrice(0);
					setShippingInfo("");
					setComments("");
					setTotalBeforeShipping(0);
					setDiscountSelected([]);
					setIsBtnActive(true);
					navigate("/");
				})
				.catch((err) => {
					Swal.fire({
						title: "ERROR",
						text: `Something went wrong. Please reach out to support with the error message: ${err.message}`,
						icon: "error",
						iconColor: "#17355E",
						confirmButtonColor: "#17355E",
						color: "#17355E",
					});
					setDiscountId("");
					setPaymentMethod("");
					setCourierId("");
					setCourierPrice(0);
					setShippingInfo("");
					setComments("");
					setTotalBeforeShipping(0);
					setDiscountSelected([]);
					setIsBtnActive(true);
					navigate("/");
				});
		} else {
			fetch(`https://labloco-medical-supplies.herokuapp.com/orders/new/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
				body: JSON.stringify({
					courierId,
					paymentMethod,
					comments,
					shippingInfo: JSON.stringify(shippingInfo),
				}),
			})
				.then((response) => response.json())
				.then((result) => {
					if (result.message.includes("success")) {
						Swal.fire({
							title: "SUCCESS",
							text: "Order complete!",
							icon: "success",
							iconColor: "#17355E",
							confirmButtonColor: "#17355E",
							color: "#17355E",
						});
					} else {
						Swal.fire({
							title: "ERROR",
							text: "Something went wrong. Please reach out to support.",
							icon: "error",
							iconColor: "#17355E",
							confirmButtonColor: "#17355E",
							color: "#17355E",
						});
					}
					setDiscountId("");
					setPaymentMethod("");
					setCourierId("");
					setCourierPrice(0);
					setShippingInfo("");
					setComments("");
					setTotalBeforeShipping(0);
					setDiscountSelected([]);
					setIsBtnActive(true);
					navigate("/");
				})
				.catch((err) => {
					Swal.fire({
						title: "ERROR",
						text: `Something went wrong. Please reach out to support with the error message: ${err.message}`,
						icon: "error",
						iconColor: "#17355E",
						confirmButtonColor: "#17355E",
						color: "#17355E",
					});
					setDiscountId("");
					setPaymentMethod("");
					setCourierId("");
					setCourierPrice(0);
					setShippingInfo("");
					setComments("");
					setTotalBeforeShipping(0);
					setDiscountSelected([]);
					setIsBtnActive(true);
					navigate("/");
				});
		}
	};

	return (
		<CheckoutProvider
			value={{
				//discount
				discountId,
				setDiscountId,
				discountSelected,

				//payment method
				paymentMethod,
				setPaymentMethod,

				//courier
				courierId,
				setCourierId,
				courierPrice,
				setCourierPrice,

				//comments
				comments,
				setComments,

				//shipping info
				shippingInfo,
				setShippingInfo,
				formValid,
				setFormValid,

				//total
				setTotalBeforeShipping,
				setTotal,
			}}
		>
			<Container
				style={{ maxWidth: "25rem" }}
				fluid={true}
				className="p-0 m-0 px-2 my-5 mx-auto"
			>
				<h1 className="display-1 text-header text-prime py-3 text-center">
					Checkout
				</h1>
				<Row className="p-0 m-0">
					<Col xs={12} className="p-0 pb-3">
						<PayMethod />
					</Col>
					<Col xs={12} className="p-0">
						<Shipping />
					</Col>
					<Col xs={12} className="p-0">
						<OrderForm />
					</Col>
					<Col xs={12} className="p-0">
						<Summary fetchedCart={fetchedCart} />
					</Col>
					<Row className="p-0 m-0 pt-4">
						<Col xs={4} className="p-0 m-0 fs-1">
							<p>Total</p>
						</Col>
						<Col
							xs={8}
							className="d-flex justify-content-end 
							align-items-center p-0 m-0 text-end fs-1 text-prime text-header"
						>
							{courierPrice && paymentMethod && formValid ? (
								<p>₱{total}</p>
							) : (
								<p className="fs-5 text-warning">
									* Please select a courier, payment method, and complete the
									shipping form
								</p>
							)}
						</Col>
					</Row>
					<Col xs={12} className="p-0 text-center py-4 px-2">
						{courierPrice && paymentMethod && formValid && isBtnActive ? (
							<Button
								onClick={checkoutHandler}
								className="custom-btn-2 w-100 py-3 fs-2"
							>
								Complete Order
							</Button>
						) : (
							<Button disabled className="custom-btn-2 w-100 py-3 fs-2">
								Complete Order
							</Button>
						)}
					</Col>
				</Row>
			</Container>
		</CheckoutProvider>
	);
};

export default Checkout;
