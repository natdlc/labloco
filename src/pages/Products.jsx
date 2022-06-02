import { Container, Row, Col, Accordion, ListGroup } from "react-bootstrap";

const Products = () => {
	return (
		<>
			<h1 className="display-1 text-header text-prime pt-5 text-center">
				All Products
			</h1>
			<Accordion>
				<Accordion.Item eventKey="0">
					<Accordion.Header>Category 1</Accordion.Header>
					<Accordion.Body>
						<ListGroup>
							<ListGroup.Item>Cras justo odio</ListGroup.Item>
							<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
							<ListGroup.Item>Morbi leo risus</ListGroup.Item>
							<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
							<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
						</ListGroup>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>Category 2</Accordion.Header>
					<Accordion.Body>
						<ListGroup>
							<ListGroup.Item>Cras justo odio</ListGroup.Item>
							<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
							<ListGroup.Item>Morbi leo risus</ListGroup.Item>
							<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
							<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
						</ListGroup>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</>
	);
};

export default Products;
