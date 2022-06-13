import { useState, useEffect, useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import DiscountContext from "../../../DiscountContext";
import CartContext from "../../../CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
	let navigate = useNavigate();
	const { fetchedCart, productSubtotalsArray, setProductSubtotalsArray } =
		useContext(CartContext);
	const { discountSelected } = useContext(DiscountContext);
	const [discountType, setDiscountType] = useState("");
	const [discountAmount, setDiscountAmount] = useState(0);
	const [subtotal, setSubtotal] = useState(0);
	const [isBtnActive, setIsBtnActive] = useState(false);
	const [percentageDiscounted, setPercentageDiscounted] = useState(0);
	const [isDiscountApplied, setIsDiscountApplied] = useState(false);

	const getSubtotal = () => {
		if (discountSelected.length) {
			const amount = discountSelected[0].amount;
			const percentage = discountSelected[0].percentage;
			if (amount) {
				setDiscountType("fixed");
				const finalSubtotal =
					productSubtotalsArray.reduce((p, c) => p + c) - amount;
				setDiscountAmount(amount);
				setSubtotal(finalSubtotal);
			} else {
				setDiscountType("percentage");
				const sum = productSubtotalsArray.reduce((p, c) => p + c);
				const finalSubtotal = sum - sum * (percentage / 100);
				setPercentageDiscounted((sum * (percentage / 100)).toFixed(2));
				setDiscountAmount(percentage);
				setSubtotal(finalSubtotal.toFixed(2));
			}
			setIsDiscountApplied(true);
		} else {
			setDiscountAmount(0);
			setDiscountType("");
			if (productSubtotalsArray.length) {
				setIsDiscountApplied(false);
				return setSubtotal(productSubtotalsArray.reduce((p, c) => p + c, 0));
			}
			setIsDiscountApplied(false);
			return setSubtotal(0);
		}
	};

	useEffect(() => {
		getSubtotal();
		if (fetchedCart) {
			if (fetchedCart.length === 0) {
				setIsBtnActive(false);
				setProductSubtotalsArray([]);
			} else setIsBtnActive(true);
		} else setIsBtnActive(false);
	}, [fetchedCart]);

	const checkoutHandler = (e) => {
		e.preventDefault();
		setIsBtnActive(false);
		navigate("/checkout");
	};

	return (
		<Col>
			<Row className="gap-2">
				{isDiscountApplied ? (
					<Col xs={12} className="m-0">
						<p className="m-0 p-0 text-muted-prime">
							* Nice! This transaction is discounted
						</p>
					</Col>
				) : (
					false
				)}
				<Col xs={12} className="d-flex justify-content-between">
					<p className="text-subheader text-prime">Discount</p>
					{discountType === "percentage" ? (
						<div className="d-flex flex-column align-items-end border-bottom">
							<p className="m-0 p-0 text-subheader text-prime">
								{discountAmount}%
							</p>
							<p className="m-0 p-0 text-subheader text-prime">
								-₱
								{percentageDiscounted}
							</p>
						</div>
					) : (
						<p className="text-subheader text-prime">-₱{discountAmount}</p>
					)}
				</Col>
				<Col xs={12} className="d-flex justify-content-between">
					<p className="text-subheader text-prime fs-4">Subtotal</p>
					<p className="text-subheader text-prime fs-4">₱{subtotal}</p>
				</Col>
				<Col className="d-flex justify-content-between">
					{isBtnActive ? (
						<Button onClick={checkoutHandler} className="w-100 custom-btn-2">
							Checkout
						</Button>
					) : (
						<Button
							disabled
							onClick={checkoutHandler}
							className="w-100 custom-btn-2"
						>
							Checkout
						</Button>
					)}
				</Col>
				<Col xs={12}>
					<p className="text-muted-prime">
						NOTE: Shipping fees are calculated at checkout
					</p>
				</Col>
			</Row>
		</Col>
	);
};

export default Checkout;
