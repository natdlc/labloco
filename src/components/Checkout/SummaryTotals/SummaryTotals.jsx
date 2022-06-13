import { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CartContext from "../../../CartContext";
import CheckoutContext from "../CheckoutContext";

const SummaryTotals = () => {
	const navigate = useNavigate();
	const { discountSelected, courierPrice, setTotalBeforeShipping } =
		useContext(CheckoutContext);
	const { productSubtotalsArray, fetchedCart } = useContext(CartContext);
	const [subtotal, setSubtotal] = useState(0);
	const [discountApplied, setDiscountApplied] = useState(false);
	const [isCourierSelected, setIsCourierSelected] = useState(false);

	const calculateSubtotal = () => {
		const sum = productSubtotalsArray.reduce((p, c) => p + c);
		if (discountSelected.length) {
			setDiscountApplied(true);
			const amount = discountSelected[0].amount;
			const percentage = discountSelected[0].percentage;
			if (amount) {
				setSubtotal(sum - amount);
				setTotalBeforeShipping(sum - amount);
			} else {
				setSubtotal(sum - sum * (percentage / 100));
				setTotalBeforeShipping(sum - sum * (percentage / 100));
			}
		} else {
			setDiscountApplied(false);
			setSubtotal(sum);
			setTotalBeforeShipping(sum);
		}
	};

	useEffect(() => {
		if (productSubtotalsArray.length === 0) navigate("/cart");
		else {
			calculateSubtotal();
		}
		if (courierPrice) setIsCourierSelected(true);
		else setIsCourierSelected(false);
	}, [fetchedCart, courierPrice]);
	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<p>Subtotal</p>
				</Col>
				<Col className="text-header text-prime p-0 m-0 text-end">
					<p>₱{subtotal.toFixed(2)}</p>
				</Col>
			</Row>
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<p>Shipping</p>
				</Col>
				<Col className="p-0 m-0 text-end text-header text-prime">
					{isCourierSelected ? (
						<p>+ ₱{courierPrice.toFixed(2)}</p>
					) : (
						<p className="text-subheader text-warning">
							* Please select a courier
						</p>
					)}
				</Col>
			</Row>
			<Row>
				{discountApplied ? (
					<p className="text-success">
						* Discount applied, check your cart for a breakdown
					</p>
				) : (
					<p className="text-muted-prime">* No discount applied</p>
				)}
			</Row>
		</Container>
	);
};

export default SummaryTotals;
