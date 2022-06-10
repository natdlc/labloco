import { useState, useEffect, useContext } from "react";

import { Accordion, Form, Container, Row, Col } from "react-bootstrap";
import CourierContext from "../../../../CourierContext";

const ShippingAccordion = () => {
	const {
		fetchedCouriersForOptions,
		fetchForCourierOptions,
		allCouriers,
		fetchAllCouriers,
	} = useContext(CourierContext);
	const [courier, setCourier] = useState("");
	const [isCourierSelected, setIsCourierSelected] = useState(false);
	const [displayCourierDetails, setDisplayCourierDetails] = useState();

	useEffect(() => {
		fetchForCourierOptions();
		fetchAllCouriers();
	}, [allCouriers]);

	const selectCourierChangeHandler = (e) => {
		setCourier(e.target.value);
		if (e.target.value === "Click to select a courier") {
			setIsCourierSelected(false);
		} else {
			setIsCourierSelected(true);
			const courierDetails = allCouriers.filter(
				(courier) => courier.courierName === e.target.value
			)[0];
			setDisplayCourierDetails(
				<Row className="p-0 m-0">
					<Col className="p-0 m-0">
						<div className="d-flex flex-column m-0 p-0 py-3">
							<p className="form-label text-prime m-0 p-0">Price</p>
							<p className="p-0 m-0">₱{courierDetails.price}</p>
						</div>
						<div className="d-flex flex-column m-0 p-0 py-3">
							<p className="form-label text-prime m-0 p-0">ETA</p>
							<p className="p-0 m-0">₱{courierDetails.eta}</p>
						</div>
					</Col>
				</Row>
			);
		}
	};

	return (
		<Accordion.Item eventKey="1" className="border-0 border-bottom">
			<Accordion.Header className="text-header text-prime">
				Shipping
			</Accordion.Header>
			<Accordion.Body className="p-3">
				<Form className="gap-3 d-flex flex-column">
					<Form.Group>
						<Form.Label>Select courier</Form.Label>
						<Form.Select
							value={courier}
							onChange={selectCourierChangeHandler}
							aria-label="Default select example"
						>
							<option>Click to select a courier</option>
							{fetchedCouriersForOptions}
						</Form.Select>
					</Form.Group>
				</Form>
				{isCourierSelected ? (
					<Container className="p-0 m-0">{displayCourierDetails}</Container>
				) : null}
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default ShippingAccordion;
