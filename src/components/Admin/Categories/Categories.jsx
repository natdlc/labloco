import { Container, Row, Col } from "react-bootstrap";
import Add from "./Add/Add";
import All from "./All/All";
import Products from "./Products/Products";

const Categories = () => {
	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0" xs={12}>
					<Add />
				</Col>
				<Col className="p-0 m-0" xs={12}>
					<All />
				</Col>
				<Col className="p-0 m-0" xs={12}>
					<Products />
				</Col>
			</Row>
		</Container>
	);
};

export default Categories;
