import { useEffect, useState } from "react";
import { Button, Container, Row, Col, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const Create = () => {
	const [discountName, setDiscountName] = useState("");
	const [description, setDescription] = useState("");
	const [amount, setAmount] = useState(0);
	const [percentage, setPercentage] = useState(0);
	const [amountNull, setAmountNull] = useState(true);
	const [percentageNull, setPercentageNull] = useState(true);

	const [btnActive, setBtnActive] = useState(false);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const discountNameChangeHandler = (e) => setDiscountName(e.target.value);
	const descriptionChangeHandler = (e) => setDescription(e.target.value);
	const amountChangeHandler = (e) => {
		setAmount(e.target.value);
	};
	const percentageChangeHandler = (e) => {
		setPercentage(e.target.value);
	};

	const [isAmountOrPercentageSelected, setIsAmountOrPercentageSelected] =
		useState(false);

	const proceedHandler = async (e) => {
		e.preventDefault();
		setBtnActive(false);

		await fetch(
			"https://labloco-medical-supplies.herokuapp.com/discounts/new",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
				body: JSON.stringify({
					name: discountName,
					description,
					percentage,
					amount,
				}),
			}
		)
			.then((response) => response.json())
			.then((data) => {
				if (data.message.includes("created")) {
					Swal.fire({
						title: "SUCCESS",
						text: "Discount created",
						icon: "success",
						iconColor: "#17355E",
						confirmButtonColor: "#17355E",
						color: "#17355E",
					});
				} else {
					Swal.fire({
						title: "ERROR",
						text: data.message,
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
					text: err.message,
					icon: "error",
					iconColor: "#17355E",
					confirmButtonColor: "#17355E",
					color: "#17355E",
				});
			});
		setDiscountName("");
		setDescription("");
		setAmount(0);
		setPercentage(0);
		setIsAmountOrPercentageSelected(false);
		handleClose();
	};


	useEffect(() => {
		if (amount != "" && percentage != "" && discountName && description) {
			setBtnActive(true);
		} else setBtnActive(false);
	}, [amount, percentage, discountName, description]);

	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Button className="custom-btn-6" onClick={handleShow}>
						Create new discount
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Enter new discount details</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form className="gap-3 d-flex flex-column">
								<Form.Group>
									<Form.Label>
										<span className="text-danger">*</span> Discount name
									</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter discount name"
										value={discountName}
										onChange={discountNameChangeHandler}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>
										<span className="text-danger">*</span> Description
									</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter description"
										value={description}
										onChange={descriptionChangeHandler}
									/>
								</Form.Group>
								{isAmountOrPercentageSelected === false ? (
									<p className="text-subheader p-0 m-0 mt-4 text-muted-reverse-prime">
										<span className="text-danger">*</span> Please fill either an
										amount or percentage
									</p>
								) : (
									false
								)}
								<Form.Group>
									<Form.Label>Amount</Form.Label>
									<Form.Control
										type="number"
										placeholder="Can't be blank, must input 0"
										value={amount}
										onChange={amountChangeHandler}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>Percentage</Form.Label>
									<Form.Control
										type="number"
										placeholder="Can't be blank, must input 0"
										value={percentage}
										onChange={percentageChangeHandler}
									/>
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

export default Create;
