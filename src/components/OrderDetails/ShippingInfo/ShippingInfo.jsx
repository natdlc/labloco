import { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";

const ShippingInfo = ({ orderDetails }) => {
	const [shippingDetails, setShippingDetails] = useState({});

	useEffect(() => {
		setShippingDetails(JSON.parse(orderDetails.shippingInfo));
	}, []);
	return (
		<Accordion.Item eventKey="1">
			<Accordion.Header>Shipping Information</Accordion.Header>
			<Accordion.Body>
				<div className="d-flex flex-column gap-1 mt-1">
					<div>
						<p className="m-0 p-0 text-subheader">First name</p>
						<p className="m-0 p-0 text-content">{shippingDetails.firstName}</p>
					</div>
					<div>
						<p className="m-0 p-0 text-subheader">Last name</p>
						<p className="m-0 p-0 text-content">{shippingDetails.lastName}</p>
					</div>
					<div>
						<p className="m-0 p-0 text-subheader">Street address</p>
						<p className="m-0 p-0 text-content">
							{shippingDetails.streetAddress}
						</p>
					</div>
					<div>
						<p className="m-0 p-0 text-subheader">City</p>
						<p className="m-0 p-0 text-content">{shippingDetails.city}</p>
					</div>
					<div>
						<p className="m-0 p-0 text-subheader">Region</p>
						<p className="m-0 p-0 text-content">{shippingDetails.region}</p>
					</div>
					<div>
						<p className="m-0 p-0 text-subheader">Zip</p>
						<p className="m-0 p-0 text-content">{shippingDetails.zip}</p>
					</div>
					<div>
						<p className="m-0 p-0 text-subheader">Phone</p>
						<p className="m-0 p-0 text-content">{shippingDetails.phone}</p>
					</div>
				</div>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default ShippingInfo;
