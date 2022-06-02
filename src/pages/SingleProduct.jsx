import { Container, Row, Col } from "react-bootstrap";
import ProductImage from "../components/SingleProduct/ProductImage/ProductImage";
import ProductDetails from "../components/SingleProduct/ProductDetails/ProductDetails";

const SingleProduct = () => {
	return (
		<Container fluid={true}>
			<Row className="d-flex justify-content-center my-sm-5 py-sm-5 gap-4">
				<Col xs={12} sm={6} md={5} lg={4}className="single-product-img p-0 mb-4">
					<ProductImage />
				</Col>
				<Col sm={6} md={5} lg={4} xxl={3}className="single-product-details">
					<ProductDetails />
				</Col>
			</Row>
		</Container>
	);
};

export default SingleProduct;
