import { useState, useEffect, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import SingleProductContext from "../../SingleProductContext";
import UserContext from "../../../../UserContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const QtyCartForm = ({ props }) => {
	const navigate = useNavigate();
	const { user } = useContext(UserContext);
	const { productInfo, productQuantity, addProductInfo, setProductQuantity } =
		useContext(SingleProductContext);
	const { allActiveProducts, productId } = props;
	const [optionForms, setOptionForms] = useState([]);
	const [isAddBtnActive, setIsAddBtnActive] = useState(true);

	useEffect(() => {
		if (allActiveProducts.length) {
			const product = allActiveProducts.filter(
				(product) => product._id === productId
			)[0];
			const productOptions = product.options;
			const optionLabelsArr = [
				...new Set(
					productOptions.map((option) => {
						return option.label;
					})
				),
			];

			const optionFormsArr = optionLabelsArr.map((option, i) => {
				const optionValuesArr = productOptions
					.filter((productOption) => productOption.label === option)
					.map((specOption, index) => {
						return <option key={index}>{specOption.value}</option>;
					});

				const optionChangeHandler = (e) => {
					if (e.target.value === "Click to view options") {
						return addProductInfo({ [`${option}`]: "" });
					}
					addProductInfo({ [`${option}`]: e.target.value });
				};

				return (
					<div className="p-0 m-0" key={i}>
						<Form.Label className="p-0 m-0 mt-2">{option}</Form.Label>
						<Form.Select
							onChange={optionChangeHandler}
							aria-label="Default select example"
						>
							<option>Click to view options</option>
							{optionValuesArr}
						</Form.Select>
					</div>
				);
			});

			setOptionForms(optionFormsArr);
		} else {
			return;
		}
	}, [allActiveProducts]);

	const addToCartHandler = (e) => {
		e.preventDefault();
		setIsAddBtnActive(false);
		if (user.isAdmin) {
			Swal.fire({
				title: "ERROR",
				text: "Action forbidden",
				icon: "error",
				iconColor: "#17355E",
				confirmButtonColor: "#17355E",
				color: "#17355E",
			});
			return;
		}
		console.log(productInfo);
		fetch("https://labloco-medical-supplies.herokuapp.com/users/cart/add", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
			body: JSON.stringify({
				productId,
				quantity: productQuantity,
				options: productInfo
					.map((productInfo) => {
						const key = Object.keys(productInfo)[0];
						const value = Object.values(productInfo)[0];
						return ` ${key}: ${value}`;
					})
					.toString(),
			}),
		})
			.then((response) => response.json())
			.then((result) => {
				if (result.message.includes("added")) {
					setIsAddBtnActive(true);
					Swal.fire({
						title: "SUCCESS",
						text: "Product added to cart!",
						icon: "success",
						iconColor: "#17355E",
						confirmButtonColor: "#17355E",
						color: "#17355E",
					});
				} else {
					setIsAddBtnActive(true);
					Swal.fire({
						title: "ERROR",
						text: `Something went wrong. ${result.message}`,
						icon: "error",
						iconColor: "#17355E",
						confirmButtonColor: "#17355E",
						color: "#17355E",
					});
				}
			})
			.catch((err) => {
				setIsAddBtnActive(true);
				Swal.fire({
					title: "ERROR",
					text: `Something went wrong. ${err.message}`,
					icon: "error",
					iconColor: "#17355E",
					confirmButtonColor: "#17355E",
					color: "#17355E",
				});
			});
	};

	const quantityChangeHandler = (e) => setProductQuantity(e.target.value);

	return (
		<Form>
			<Form.Group>{optionForms}</Form.Group>
			<Form.Group className="d-flex align-items-center gap-1 my-3">
				<Form.Label className="m-0 pe-2">Qty</Form.Label>
				<Form.Control
					type="number"
					placeholder="1"
					value={productQuantity}
					onChange={quantityChangeHandler}
					style={{ maxWidth: "5rem" }}
				/>
				{isAddBtnActive ? (
					<Button
						onClick={addToCartHandler}
						className="custom-btn-2 ms-auto flex-shrink-0"
					>
						Add to Cart
					</Button>
				) : (
					<Button
						disabled
						onClick={addToCartHandler}
						className="custom-btn-2 ms-auto flex-shrink-0"
					>
						Add to Cart
					</Button>
				)}
			</Form.Group>
		</Form>
	);
};

export default QtyCartForm;
