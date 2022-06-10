import { useState, useEffect } from "react";

const ProductImage = (props) => {
	const [img, setImg] = useState("");

	const { productId, allActiveProducts } = props;

	const fetchData = () => {
		const imageFound = allActiveProducts.find((product) => product._id === productId)
			.image.length;
		if (imageFound) {
			setImg(
				`https://labloco-medical-supplies.herokuapp.com/products/image/${productId}`
			);
		} else {
			setImg(`https://via.placeholder.com/1000x1000`);
		}
	};

	useEffect(() => {
		if (allActiveProducts.length) fetchData();
	}, [allActiveProducts]);
	return (
		<>
			<img className="img-fluid" src={img} alt="" />
		</>
	);
};

export default ProductImage;
