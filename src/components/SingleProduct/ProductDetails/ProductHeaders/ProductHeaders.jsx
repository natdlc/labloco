import { useState, useEffect } from "react";

const ProductHeaders = ({ props }) => {
	const { allActiveProducts, productId } = props;
	const [categories, setCategories] = useState([]);
	const [productName, setProductName] = useState("");
	const [price, setPrice] = useState(0);

	useEffect(() => {
		if (allActiveProducts.length) {
			fetch("https://labloco-medical-supplies.herokuapp.com/categories/active")
				.then((response) => response.json())
				.then((categories) => {
					setProductName(
						allActiveProducts.filter((product) => product._id === productId)[0].name
					);

					setPrice(
						allActiveProducts.filter((product) => product._id === productId)[0].price
					);

					const productCategoryIds = allActiveProducts
						.filter((product) => product._id === productId)[0]
						.categories.map((category) => category.categoryId);
					const mappedCategories = productCategoryIds.map((id) => {
						return categories.filter((category) => category._id === id)[0];
					});
					const categoriesArr = mappedCategories.map((category) => {
						return (
							<p
								key={category._id}
								className="text-muted-prime m-0 p-0 text-capitalize"
							>
								{category.name},
							</p>
						);
					});
					setCategories(categoriesArr);
				});
		} else {
			return;
		}
	}, [allActiveProducts]);

	return (
		<>
			<div className="d-flex flex-wrap gap-2">{categories}</div>
			<h1 className="display-2 text-header text-prime">{productName}</h1>
			<p className="text-content fs-5">₱{price}</p>
		</>
	);
};

export default ProductHeaders;
