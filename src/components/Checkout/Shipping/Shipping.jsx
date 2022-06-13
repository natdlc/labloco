import { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";
import CourierContext from "../../../CourierContext";
import CheckoutContext from "../CheckoutContext";

const Shipping = () => {
	const { setCourierId, setCourierPrice } = useContext(CheckoutContext);
	const {
		fetchForCourierOptions,
		fetchedCouriersForOptions,
		allCouriers,
		fetchAllCouriers,
	} = useContext(CourierContext);
	const [courier, setCourier] = useState("");

	useEffect(() => {
		fetchAllCouriers();
		fetchForCourierOptions();
	}, [allCouriers]);

	const courierChangeHandler = (e) => {
		if (e.target.value == "-- Choose Shipping Method --") {
			setCourierId("");
			setCourierPrice(0);
			setCourier("");
			return;
		}
		setCourier(e.target.value);
	};

	useEffect(() => {
		if (courier) {
			const filteredCourier = allCouriers.filter(
				(fCourier) => fCourier.courierName === courier
			)[0];
			setCourierId(filteredCourier._id);
			setCourierPrice(filteredCourier.price);
		}
	}, [courier]);

	return (
		<Form.Select
			value={courier}
			onChange={courierChangeHandler}
			className="p-3"
		>
			<option>-- Choose Shipping Method --</option>
			{fetchedCouriersForOptions}
		</Form.Select>
	);
};

export default Shipping;
