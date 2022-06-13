import { Accordion } from "react-bootstrap";

const ShippingInfo = () => {
	return (
		<Accordion.Item eventKey="1">
			<Accordion.Header>Shipping Information</Accordion.Header>
			<Accordion.Body>
				<div className="d-flex flex-column gap-1 mt-1">
					<div>
						<p className="m-0 p-0 text-subheader">First name</p>
						<p className="m-0 p-0 text-content">test 1</p>
					</div>
					<div>
						<p className="m-0 p-0 text-subheader">Last name</p>
						<p className="m-0 p-0 text-content">test 1 last name</p>
					</div>
					<div>
						<p className="m-0 p-0 text-subheader">Street address</p>
						<p className="m-0 p-0 text-content">11 Street address sample</p>
					</div>
					<div>
						<p className="m-0 p-0 text-subheader">City</p>
						<p className="m-0 p-0 text-content">City sample</p>
					</div>
					<div>
						<p className="m-0 p-0 text-subheader">Region</p>
						<p className="m-0 p-0 text-content">Region sample</p>
					</div>
					<div>
						<p className="m-0 p-0 text-subheader">Zip</p>
						<p className="m-0 p-0 text-content">1111</p>
					</div>
					<div>
						<p className="m-0 p-0 text-subheader">Phone</p>
						<p className="m-0 p-0 text-content">123 123 1233</p>
					</div>
				</div>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default ShippingInfo;
