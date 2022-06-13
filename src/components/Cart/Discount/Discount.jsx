import { useState, useEffect, useContext } from "react";
import { Col, Form, Button } from "react-bootstrap";
import DiscountContext from "../../../DiscountContext";
import Swal from "sweetalert2";

const Discount = () => {
	const {
		fetchedDiscounts,
		fetchDiscounts,
		setDiscountSelected,
		discountSelected,
	} = useContext(DiscountContext);
	const [discount, setDiscount] = useState("");
	const [isBtnActive, setIsBtnActive] = useState(false);

	useEffect(() => {
		fetchDiscounts();
	}, [fetchedDiscounts]);

	useEffect(() => {
		if (discount) setIsBtnActive(true);
		else setIsBtnActive(false);
	}, [discount]);

	useEffect(() => {
		if (discountSelected.length) {
			setIsBtnActive(false);
		}
	}, [discountSelected]);

	const discountChangeHandler = (e) => setDiscount(e.target.value);

	const applyDiscountHandler = (e) => {
		e.preventDefault();
		setIsBtnActive(false);
		const filteredDiscount = fetchedDiscounts.filter(
			(specificDiscount) =>
				specificDiscount.name.toLowerCase() === discount.toLowerCase()
		);
		const discountValid = filteredDiscount.length;

		if (discountValid) {
			setDiscountSelected(filteredDiscount);
			Swal.fire({
				title: "SUCCESS",
				text: "Discount applied!",
				icon: "success",
				iconColor: "#17355E",
				confirmButtonColor: "#17355E",
				color: "#17355E",
			});
			setDiscount("");
		} else {
			Swal.fire({
				title: "NOTE",
				text: "Sorry, that discount code is invalid. Please reach out to support@lab-loco.com for any questions.",
				icon: "warning",
				iconColor: "#17355E",
				confirmButtonColor: "#17355E",
				color: "#17355E",
			});
			setDiscount("");
			setDiscountSelected({});
			setIsBtnActive(true);
		}
	};

	return (
		<Col xs={12}>
			<Form className="d-flex align-items-center gap-2">
				<Form.Group>
					<Form.Control
						value={discount}
						onChange={discountChangeHandler}
						className="text-prime text-content"
						placeholder={
							discountSelected.length
								? discountSelected[0].name
								: "Enter discount code"
						}
					/>
				</Form.Group>
				{isBtnActive ? (
					<Button
						onClick={applyDiscountHandler}
						style={{ maxWidth: "5rem" }}
						className="custom-btn-3"
					>
						Apply
					</Button>
				) : (
					<Button
						disabled
						style={{ maxWidth: "5rem" }}
						className="custom-btn-3"
					>
						Apply
					</Button>
				)}
			</Form>
		</Col>
	);
};

export default Discount;
