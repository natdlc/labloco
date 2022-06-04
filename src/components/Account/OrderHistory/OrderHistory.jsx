import { Table } from "react-bootstrap";

const OrderHistory = () => {
	return (
		<Table striped hover className="text-start">
			<thead>
				<tr>
					<th>Date & Time</th>
					<th>Status</th>
					<th>Amount</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>May 5, 2022, 12:42 UTC</td>
					<td>New</td>
					<td>₱1760</td>
				</tr>
				<tr>
					<td>May 5, 2022, 12:42 UTC</td>
					<td>Pending</td>
					<td>₱1760</td>
				</tr>
				<tr>
					<td>May 5, 2022, 12:42 UTC</td>
					<td>Completed</td>
					<td>₱1760</td>
				</tr>
				<tr>
					<td>May 5, 2022, 12:42 UTC</td>
					<td>Completed</td>
					<td>₱1760</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default OrderHistory;
