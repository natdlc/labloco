import { useContext } from "react";
import { Form } from "react-bootstrap";
import CheckoutContext from "../CheckoutContext";

const PayMethod = () => {
	const { paymentMethod, setPaymentMethod } = useContext(CheckoutContext);
	const paymentMethodChangeHandler = (e) => {
		if (e.target.value === "-- Payment Method --") return setPaymentMethod("");
		setPaymentMethod(e.target.value);
	};

	return (
		<Form.Select
			value={paymentMethod}
			onChange={paymentMethodChangeHandler}
			className="p-3"
		>
			<option>-- Payment Method --</option>
			<option value="gcash">Gcash</option>
			<option value="cod">Cash on Delivery</option>
		</Form.Select>
	);
};

export default PayMethod;
