import { useState, useEffect } from "react";

const ProductHeaders = ({ props }) => {
	const { allProducts, productId } = props;
	const [categories, setCategories] = useState([]);
	const [productName, setProductName] = useState("");
	const [price, setPrice] = useState(0);

	useEffect(() => {
		fetch("https://labloco-medical-supplies.herokuapp.com/categories/active")
			.then((response) => response.json())
			.then((categories) => {
				setProductName(
					allProducts.filter((product) => product._id === productId)[0].name
				);

				setPrice(
					allProducts.filter((product) => product._id === productId)[0].price
				);

				const productCategoryIds = allProducts
					.filter((product) => product._id === productId)[0]
					.categories.map((category) => category.categoryId);
				const categoryNames = productCategoryIds.map((id) => {
					return categories.filter((category) => category._id === id)[0].name;
				});
				const categoriesArr = categoryNames.map((categoryName) => {
					return (
						<>
							<p className="text-muted-prime m-0 p-0 text-capitalize">
								{categoryName},
							</p>
						</>
					);
				});
				setCategories(categoriesArr);
			});
	}, []);

	return (
		<>
			<div className="d-flex flex-wrap gap-2">{categories}</div>
			<h1 className="display-2 text-header text-prime">{productName}</h1>
			<p className="text-content fs-5">₱{price}</p>
		</>
	);
};

export default ProductHeaders;
