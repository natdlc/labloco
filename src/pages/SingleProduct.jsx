import { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductImage from "../components/SingleProduct/ProductImage/ProductImage";
import ProductDetails from "../components/SingleProduct/ProductDetails/ProductDetails";
import { useParams } from "react-router-dom";
import ProductContext from "../ProductContext";
import { SingleProductProvider } from "../components/SingleProduct/SingleProductContext";

const SingleProduct = () => {
	const [productInfo, setProductInfo] = useState([]);
	const [productQuantity, setProductQuantity] = useState(1);
	const [productComments, setProductComments] = useState("");

	const { productId } = useParams();
	const { fetchAllActiveProducts, allActiveProducts } =
		useContext(ProductContext);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const addProductInfo = (keyValue) => {
		const key = Object.keys(keyValue)[0];
		const productInfoArr = [...productInfo];
		if (productInfo.length === 0) productInfoArr.push(keyValue);
		else {
			const keysArr = productInfoArr.map(
				(productInfo) => Object.keys(productInfo)[0]
			);
			if (keysArr.includes(key)) {
				productInfoArr[keysArr.indexOf(key)][key] = Object.values(keyValue)[0];
				return;
			}
			productInfoArr.push(keyValue);
		}
		setProductInfo(productInfoArr);
	};

	useEffect(() => {
		fetchAllActiveProducts();
	}, [allActiveProducts, productInfo, productQuantity]);

	return (
		<SingleProductProvider
			value={{
				productInfo,
				productId,
				addProductInfo,
				productQuantity,
				setProductQuantity,
			}}
		>
			<Container fluid={true} className="mb-5 pb-5">
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
