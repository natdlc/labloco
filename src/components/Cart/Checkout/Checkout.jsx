import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import DiscountContext from "../../../DiscountContext";
import CartContext from "../../../CartContext";

const Checkout = () => {
	const { fetchedCart, productSubtotalsArray } = useContext(CartContext);
	const { discountSelected } = useContext(DiscountContext);
	const [discountType, setDiscountType] = useState("");
	const [discountAmount, setDiscountAmount] = useState(0);
	const [subtotal, setSubtotal] = useState(0);

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
				setDiscountAmount(percentage);
				setSubtotal(finalSubtotal);
			}
		} else {
			setDiscountAmount(0);
			setDiscountType("");
			if (productSubtotalsArray.length) {
				return setSubtotal(productSubtotalsArray.reduce((p, c) => p + c));
			}
			return setSubtotal(0);
		}
	};

	useEffect(() => {
		// console.log(fetchedCart);
		// set fetchedCart here later
		getSubtotal();
		if (fetchedCart.length === 0) {
			setSubtotal(0);
		}
	}, [fetchedCart]);

	return (
		<Col>
			<Row className="gap-2">
				<Col xs={12} className="d-flex justify-content-between">
					<p className="text-subheader text-prime">Discount</p>
					{discountType === "percentage" ? (
						<p className="text-subheader text-prime">{discountAmount}%</p>
					) : (
						<p className="text-subheader text-prime">-₱{discountAmount}</p>
					)}
				</Col>
				<Col xs={12} className="d-flex justify-content-between">
					<p className="text-subheader text-prime fs-4">Subtotal</p>
					<p className="text-subheader text-prime fs-4">₱{subtotal}</p>
				</Col>
				<Col className="d-flex justify-content-between">
					<Button className="w-100 custom-btn-2">Checkout</Button>
				</Col>
			</Row>
		</Col>
	);
};

export default Checkout;
