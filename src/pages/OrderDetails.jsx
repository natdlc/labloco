import { useEffect } from "react";
import { Container, Row, Accordion, Button } from "react-bootstrap";

import DateCreated from "../components/OrderDetails/DateCreated/DateCreated";
import ShippingInfo from "../components/OrderDetails/ShippingInfo/ShippingInfo";
import PaymentMethod from "../components/OrderDetails/PaymentMethod/PaymentMethod";
import Courier from "../components/OrderDetails/Courier/Courier";
import ShippingFee from "../components/OrderDetails/ShippingFee/ShippingFee";
import DiscountCode from "../components/OrderDetails/DiscountCode/DiscountCode";
import DiscountAmount from "../components/OrderDetails/DiscountAmount/DiscountAmount";
import Products from "../components/OrderDetails/Products/Products";
import TotalAmount from "../components/OrderDetails/TotalAmount/TotalAmount";

import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const OrderDetails = () => {
	const { orderId } = useParams();
	const [orderDetails, setOrderDetails] = useState({});

	useEffect(() => {
		fetch(
			`https://labloco-medical-supplies.herokuapp.com/users/order/${orderId}`,
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			}
		)
			.then((response) => response.json())
			.then((order) => {
				setOrderDetails(order);
			});
		//add order details in array below LATER!!!
	}, []);
	return (
		<>
			<h1 className="display-1 text-header text-prime py-3 text-center">
				Order Details
			</h1>
			<Container>
				<Row className="gap-3 pb-5 mb-5">
					<Accordion alwaysOpen>
						<DateCreated orderDetails={orderDetails} />
						<ShippingInfo orderDetails={orderDetails} />
						<PaymentMethod orderDetails={orderDetails} />
						<Courier orderDetails={orderDetails} />
						<ShippingFee orderDetails={orderDetails} />
						<DiscountCode orderDetails={orderDetails} />
						<DiscountAmount orderDetails={orderDetails} />
						<Products orderDetails={orderDetails} />
						<TotalAmount orderDetails={orderDetails} />
					</Accordion>
					<Button
						style={{ maxWidth: "12rem" }}
						as={Link}
						to="/profile"
						className="custom-btn-2 mx-auto"
					>
						Back to Account
					</Button>
				</Row>
			</Container>
		</>
	);
};

export default OrderDetails;
