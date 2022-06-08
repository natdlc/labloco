import { Container, Row, Col } from "react-bootstrap";
import Add from "./Add/Add";

const Categories = () => {
	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0" xs={12}>
					<Add />
				</Col>
			</Row>
		</Container>
	);
};

export default Categories;
