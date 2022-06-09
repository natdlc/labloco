const ProductImage = (props) => {
	const { productId, allProducts } = props;
	const imageFound = allProducts.find((product) => product._id === productId)
		.image.length;
	let img = "";
	if (imageFound) {
		img = `https://labloco-medical-supplies.herokuapp.com/products/image/${productId}`;
	} else {
		img = `https://via.placeholder.com/1000x1000`;
	}
	return (
		<>
			<img className="img-fluid" src={img} alt="" />
		</>
	);
};

export default ProductImage;
