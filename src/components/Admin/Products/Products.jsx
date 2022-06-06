import Create from "./Create/Create";
import UploadImage from "./UploadImage/UploadImage";
import { Container, Row, Col } from "react-bootstrap";

const Products = () => {
	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0" xs={12}>
					<Create />
				</Col>
				<Col className="p-0 m-0">
					<UploadImage />
				</Col>
			</Row>
		</Container>
	);
};

export default Products;
