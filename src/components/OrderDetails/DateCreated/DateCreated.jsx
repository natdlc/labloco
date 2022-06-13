import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import date from "date-and-time";

const DateCreated = ({ orderDetails }) => {
	const [dateCreated, setDateCreated] = useState("");

	useEffect(() => {
		const purchasedOnDate = new Date(orderDetails.purchasedOn);
		setDateCreated(date.format(purchasedOnDate, "ddd, MMM DD YYYY, HH:mm:ss"));
	}, []);
	return (
		<Accordion.Item eventKey="0">
			<Accordion.Header>Date Created</Accordion.Header>
			<Accordion.Body>
				<p className="m-0 p-0 text-content">{dateCreated}</p>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default DateCreated;
