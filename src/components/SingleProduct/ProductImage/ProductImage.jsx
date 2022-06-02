import { Carousel } from "react-bootstrap";

const ProductImage = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://via.placeholder.com/1000x1000"
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://via.placeholder.com/1000x1000"
					alt="Second slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://via.placeholder.com/1000x1000"
					alt="Third slide"
				/>
			</Carousel.Item>
		</Carousel>
	);
};

export default ProductImage;
