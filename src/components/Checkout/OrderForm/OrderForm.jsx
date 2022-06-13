import { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";
import CheckoutContext from "../CheckoutContext";

const OrderForm = () => {
	const { setShippingInfo, setComments, comments, setFormValid } =
		useContext(CheckoutContext);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [streetAddress, setStreetAddress] = useState("");
	const [city, setCity] = useState("");
	const [region, setRegion] = useState("");
	const [zip, setZip] = useState("");
	const [phone, setPhone] = useState("");

	useEffect(() => {
		if (
			firstName &&
			lastName &&
			streetAddress &&
			city &&
			region &&
			zip &&
			phone
		) {
			setFormValid(true);
		} else {
			setFormValid(false);
		}
		const shippingInfoObj = {
			firstName,
			lastName,
			streetAddress,
			city,
			region,
			zip,
			phone,
			comments,
		};
		setShippingInfo(shippingInfoObj);
	}, [firstName, lastName, streetAddress, city, region, zip, phone, comments]);

	const firstNameChangeHandler = (e) => {
		setFirstName(e.target.value);
	};
	const lastNameChangeHandler = (e) => {
		setLastName(e.target.value);
	};
	const streetAddressChangeHandler = (e) => {
		setStreetAddress(e.target.value);
	};
	const cityChangeHandler = (e) => {
		setCity(e.target.value);
	};
	const regionChangeHandler = (e) => {
		setRegion(e.target.value);
	};
	const zipChangeHandler = (e) => {
		setZip(e.target.value);
	};
	const phoneChangeHandler = (e) => {
		setPhone(e.target.value);
	};
	const commentsChangeHandler = (e) => {
		setComments(e.target.value);
	};

	return (
		<Form className="p-3">
			<h4 className="text-prime text-header py-3">Shipping Information</h4>
			<Form.Group className="mb-3">
				<Form.Label>
					<span className="text-danger">*</span> First name
				</Form.Label>
				<Form.Control
					onChange={firstNameChangeHandler}
					type="text"
					placeholder="First Name"
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>
					<span className="text-danger">*</span> Last name
				</Form.Label>
				<Form.Control
					onChange={lastNameChangeHandler}
					type="text"
					placeholder="Last Name"
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>
					<span className="text-danger">*</span> Street address
				</Form.Label>
				<Form.Control
					onChange={streetAddressChangeHandler}
					type="text"
					placeholder="Street Address"
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>
					<span className="text-danger">*</span> City
				</Form.Label>
				<Form.Control
					onChange={cityChangeHandler}
					type="text"
					placeholder="City"
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>
					<span className="text-danger">*</span> Region
				</Form.Label>
				<Form.Control
					onChange={regionChangeHandler}
					type="text"
					placeholder="region"
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>
					<span className="text-danger">*</span> Zip
				</Form.Label>
				<Form.Control
					onChange={zipChangeHandler}
					type="text"
					placeholder="Zip"
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>
					<span className="text-danger">*</span> Phone
				</Form.Label>
				<Form.Control
					onChange={phoneChangeHandler}
					type="text"
					placeholder="09112223333"
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Comments</Form.Label>
				<Form.Control
					as="textarea"
					rows={4}
					onChange={commentsChangeHandler}
					type="textarea"
					placeholder="Enter order comments here if you have any"
				/>
			</Form.Group>
		</Form>
	);
};

export default OrderForm;
