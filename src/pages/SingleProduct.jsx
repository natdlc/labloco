import { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductImage from "../components/SingleProduct/ProductImage/ProductImage";
import ProductDetails from "../components/SingleProduct/ProductDetails/ProductDetails";
import { useParams } from "react-router-dom";
import ProductContext from "../ProductContext";
import { SingleProductProvider } from "../components/SingleProduct/SingleProductContext";

const SingleProduct = () => {
	// create single product context
	// store all data to be sent to server in single product context

	const [productInfo, setProductInfo] = useState({productId, quantity});

	const { productId } = useParams();
	const { fetchAllActiveProducts, allActiveProducts } =
		useContext(ProductContext);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		fetchAllActiveProducts();
	}, [allActiveProducts]);

	return (
		<SingleProductProvider value={{}}>
			<Container fluid={true}>
				<Row className="d-flex justify-content-center my-sm-5 py-sm-5 gap-4">
					<Col
						xs={12}
						sm={6}
						md={5}
						lg={4}
						className="single-product-img p-0 mb-4"
					>
						<ProductImage
							allActiveProducts={allActiveProducts}
							productId={productId}
						/>
					</Col>
					<Col sm={6} md={5} lg={4} xxl={3} className="single-product-details">
						<ProductDetails
							allActiveProducts={allActiveProducts}
							productId={productId}
						/>
					</Col>
				</Row>
			</Container>
		</SingleProductProvider>
	);
};

export default SingleProduct;
