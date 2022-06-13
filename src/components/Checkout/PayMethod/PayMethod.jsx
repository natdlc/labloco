import { useState, useContext, useEffect } from "react";
import { Form } from "react-bootstrap";
import CheckoutContext from "../CheckoutContext";

const PayMethod = () => {
	const { paymentMethod, setPaymentMethod } = useContext(CheckoutContext);
	const paymentMethodChangeHandler = (e) => setPaymentMethod(e.target.value);

	return (
		<Form.Select
			value={paymentMethod}
			onChange={paymentMethodChangeHandler}
			className="p-3"
		>
			<option>-- Payment Method --</option>
			<option value="gcash">Gcash</option>
			<option value="card">Credit / Debit Card</option>
			<option value="cod">Cash on Delivery</option>
		</Form.Select>
	);
};

export default PayMethod;
