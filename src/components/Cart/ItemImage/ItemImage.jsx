import { useState, useEffect } from "react";

const ItemImage = ({ productId }) => {
	const [productImg, setProductImg] = useState("");
	useEffect(() => {
		fetch(
			`https://labloco-medical-supplies.herokuapp.com/products/${productId}`
		)
			.then((response) => response.json())
			.then((product) => {
				if (product.image.length) {
					setProductImg(
						`https://labloco-medical-supplies.herokuapp.com/products/image/${productId}`
					);
				} else {
					setProductImg(`https://via.placeholder.com/400x400`);
				}
			});
	}, []);

	return <img className="img-fluid" src={productImg} alt="product image" />;
};

export default ItemImage;
