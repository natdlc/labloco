import { useEffect, useContext } from "react";
import { Container, Row, Accordion, Button, Spinner } from "react-bootstrap";

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

import CourierContext from "../CourierContext";
import DiscountContext from "../DiscountContext";
import ProductContext from "../ProductContext";

const OrderDetails = () => {
	const { orderId } = useParams();
	const { allActiveProducts } = useContext(ProductContext);
	const { allCouriers } = useContext(CourierContext);
	const { fetchedDiscounts } = useContext(DiscountContext);

	const [orderDetails, setOrderDetails] = useState({});
	const [courierDetails, setCourierDetails] = useState({});
	const [discountDetails, setDiscountDetails] = useState({});
	const [allProducts, setAllProducts] = useState([]);
	const [allOrderProducts, setAllOrderProducts] = useState([]);
	const [infoLoaded, setInfoLoaded] = useState(false);
	const fetchData = async () => {
		await fetch(
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
				const filteredCourier = allCouriers.filter(
					(fetchedCourier) => fetchedCourier._id === order.courier[0].courierId
				)[0];
				if (order.discount.length) {
					const filteredDiscount = fetchedDiscounts.filter((sDiscount) => {
						return sDiscount._id === order.discount[0].discountId;
					})[0];
					setDiscountDetails(filteredDiscount);
				} else {
					setDiscountDetails({});
				}
				setAllProducts(allActiveProducts);
				setAllOrderProducts(order.products);
				setCourierDetails(filteredCourier);
				setInfoLoaded(true);
			});
	};

	useEffect(() => {
		if (
			allCouriers.length &&
			fetchedDiscounts.length &&
			allActiveProducts.length
		)
			fetchData();
	}, [orderDetails, allCouriers, fetchedDiscounts, allActiveProducts]);
	return (
		<>
			<h1 className="display-1 text-header text-prime py-3 text-center">
				Order Details
			</h1>
			{infoLoaded ? (
				<Container style={{maxWidth: "35rem"}}>
					<Row className="gap-3 pb-5 mb-5">
						<Accordion alwaysOpen>
							<DateCreated orderDetails={orderDetails} />
							<ShippingInfo orderDetails={orderDetails} />
							<PaymentMethod orderDetails={orderDetails} />
							<Courier courierDetails={courierDetails} />
							<ShippingFee courierDetails={courierDetails} />
							<DiscountCode discountDetails={discountDetails} />
							<DiscountAmount discountDetails={discountDetails} />
							<Products
								allProducts={allProducts}
								allOrderProducts={allOrderProducts}
							/>
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
			) : (
				<Container className="d-flex justify-content-center py-5">
					<Spinner animation="border" role="status" className="">
						<span className="visually-hidden mx-auto">Loading...</span>
					</Spinner>
				</Container>
			)}
		</>
	);
};

export default OrderDetails;
