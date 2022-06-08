import Create from "./Create/Create";
import { Container, Row, Col } from "react-bootstrap";
import UploadImage from "./UploadImage/UploadImage";
import DeleteImage from "./DeleteImage/DeleteImage";
import Update from "./Update/Update";
import Archive from "./Archive/Archive";
import All from "./All/All";
import AddCategory from "./AddCategory/AddCategory";
import RemoveCategory from "./RemoveCategory/RemoveCategory";
import AddOption from "./AddOption/AddOption";
import DeleteOption from "./DeleteOption/DeleteOption";

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
				<Col xs={12} className="p-0 m-0">
					<DeleteImage />
				</Col>
				<Col xs={12} className="p-0 m-0">
					<Update />
				</Col>
				<Col xs={12} className="p-0 m-0">
					<Archive />
				</Col>
				<Col xs={12} className="p-0 m-0">
					<All />
				</Col>
				<Col xs={12} className="p-0 m-0">
					<AddCategory />
				</Col>
				<Col xs={12} className="p-0 m-0">
					<RemoveCategory />
				</Col>
				<Col xs={12} className="p-0 m-0">
					<AddOption />
				</Col>
				<Col xs={12} className="p-0 m-0">
					<DeleteOption />
				</Col>
			</Row>
		</Container>
	);
};

export default Products;
