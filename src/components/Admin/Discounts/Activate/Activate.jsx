import { useEffect, useState } from "react";
import { Button, Container, Row, Col, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const Activate = () => {
	const [show, setShow] = useState(false);

	const [btnActive, setBtnActive] = useState(false);

	const [discount, setDiscount] = useState("");

	const [discountId, setDiscountId] = useState("");

	const [fetchedDiscountsForOptions, setFetchedDiscountsForOptions] = useState(
		[]
	);

	const handleShow = () => setShow(true);
	const handleClose = () => {
		setDiscount("");
		setFetchedDiscountsForOptions([]);
		setDiscountId("");
		setBtnActive(false);
		setShow(false);
	};

	const fetchDiscountsForOptions = async () => {
		await fetch(`https://labloco-medical-supplies.herokuapp.com/discounts/`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((response) => response.json())
			.then(async (data) => {
				const discountsArr = data.map((discount) => {
					return (
						<option key={discount._id} value={discount.name}>
							{discount.name}
						</option>
					);
				});
				setFetchedDiscountsForOptions(discountsArr);
			});
	};

	const selectDiscountChangeHandler = async (e) => {
		setDiscountId("");
		if (e.target.value === "Click to select a discount") {
			setDiscount("");
			setFetchedDiscountsForOptions([]);
		} else {
			setDiscount(e.target.value);
		}
		await fetch(`https://labloco-medical-supplies.herokuapp.com/discounts/`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((response) => response.json())
			.then(async (result) => {
				const fetchedDiscount = result.filter(
					(discount) => discount.name === e.target.value
				);
				setDiscountId(fetchedDiscount[0]._id);
			})
			.catch(() => setBtnActive(false));
	};

	const proceedHandler = async (e) => {
		e.preventDefault();
		await fetch(
			`https://labloco-medical-supplies.herokuapp.com/discounts/${discountId}/activate`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			}
		)
			.then((response) => response.json())
			.then((result) => {
				if (result.message.includes("activated")) {
					Swal.fire({
						title: "SUCCESS",
						text: "Discount activated",
						icon: "success",
						iconColor: "#17355E",
						confirmButtonColor: "#17355E",
						color: "#17355E",
					});
				} else {
					Swal.fire({
						title: "ERROR",
						text: `Something went wrong: ${result.message}`,
						icon: "error",
						iconColor: "#17355E",
						confirmButtonColor: "#17355E",
						color: "#17355E",
					});
				}
			})
			.catch((err) => {
				Swal.fire({
					title: "ERROR",
					text: `Something went wrong: ${err.message}`,
					icon: "error",
					iconColor: "#17355E",
					confirmButtonColor: "#17355E",
					color: "#17355E",
				});
			});
		handleClose();
	};

	useEffect(() => {
		if (show) fetchDiscountsForOptions();
		else setFetchedDiscountsForOptions([]);
		if (discountId) setBtnActive(true);
		else setBtnActive(false);
	}, [show, discountId]);

	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Button className="custom-btn-6" onClick={handleShow}>
						Activate a discount
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Activate a discount</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form className="gap-3 d-flex flex-column">
								<Form.Group>
									<Form.Label>Select discount to activate</Form.Label>
									<Form.Select
										value={discount}
										onChange={selectDiscountChangeHandler}
										aria-label="Default select example"
									>
										<option>Click to select a courier</option>
										{fetchedDiscountsForOptions}
									</Form.Select>
								</Form.Group>
							</Form>
						</Modal.Body>
						<Modal.Footer>
							<Button className="custom-btn-5" onClick={handleClose}>
								Cancel
							</Button>
							{btnActive ? (
								<Button className="custom-btn-2" onClick={proceedHandler}>
									Proceed
								</Button>
							) : (
								<Button
									disabled
									className="custom-btn-2"
									onClick={proceedHandler}
								>
									Proceed
								</Button>
							)}
						</Modal.Footer>
					</Modal>
				</Col>
			</Row>
		</Container>
	);
};

export default Activate;
