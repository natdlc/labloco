import { Table } from "react-bootstrap";

const OrderHistory = () => {
	return (
		<Table striped hover>
			<thead>
				<tr>
					<th>Date & Time</th>
					<th>Amount</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>May 5, 2022, 12:42 UTC</td>
					<td>₱1760</td>
				</tr>
				<tr>
					<td>May 5, 2022, 12:42 UTC</td>
					<td>₱1760</td>
				</tr>
				<tr>
					<td>May 5, 2022, 12:42 UTC</td>
					<td>₱1760</td>
				</tr>
				<tr>
					<td>May 5, 2022, 12:42 UTC</td>
					<td>₱1760</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default OrderHistory;
