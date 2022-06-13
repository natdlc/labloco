import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import date from "date-and-time";
import { useNavigate } from "react-router-dom";

const OrderHistory = ({ orders, fetchOrders }) => {
	const navigate = useNavigate();
	const [ordersDisplay, setOrdersDisplay] = useState([]);

	useEffect(() => {
		fetchOrders();
		if (orders.length) {
			const ordersArr = orders.map((mOrder) => {
				const purchasedOnDate = new Date(mOrder.purchasedOn);
				const orderClickHandler = (e) => {
					navigate(`/order/${mOrder._id}`);
				};
				return (
					<tr key={mOrder._id} onClick={orderClickHandler}>
						<td>{date.format(purchasedOnDate, "YYYY/MM/DD")}</td>
						<td>{mOrder.status}</td>
						<td>{mOrder.totalAmount.toFixed(2)}</td>
					</tr>
				);
			});

			setOrdersDisplay(ordersArr);
		}
	}, [orders]);

	return (
		<Table striped hover className="text-start">
			<thead>
				<tr>
					<th className="px-1">Date created</th>
					<th className="px-1">Status</th>
					<th className="px-1">Total</th>
				</tr>
			</thead>
			<tbody>{ordersDisplay}</tbody>
		</Table>
	);
};

export default OrderHistory;
