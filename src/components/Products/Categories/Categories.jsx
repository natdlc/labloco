import { Accordion, ListGroup } from "react-bootstrap";

const Categories = () => {
	return (
		<Accordion>
			<Accordion.Item eventKey="0" className="border-0 border-bottom">
				<Accordion.Header className="text-header text-prime">
					Group 1
				</Accordion.Header>
				<Accordion.Body className="p-0">
					<ListGroup.Item className="p-0 border-0">
						<a
							href="#category-1"
							className="d-block 
							text-content 
							list-group-item 
							border-0 
							p-4 
							border-bottom"
						>
							Category 1
						</a>
					</ListGroup.Item>
					<ListGroup.Item className="p-0 border-0">
						<a
							href="#category-2"
							className="d-block text-content list-group-item border-0 p-4 border-bottom"
						>
							Category 2
						</a>
					</ListGroup.Item>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1" className="border-0 border-bottom">
				<Accordion.Header className="text-header text-prime">
					Group 2
				</Accordion.Header>
				<Accordion.Body className="p-0">
					<ListGroup.Item className="p-0 border-0">
						<a
							href="#"
							className="d-block text-content list-group-item border-0 p-4 border-bottom"
						>
							Category 3
						</a>
					</ListGroup.Item>
					<ListGroup.Item className="p-0 border-0">
						<a
							href="#"
							className="d-block text-content list-group-item border-0 p-4 border-bottom"
						>
							Category 4
						</a>
					</ListGroup.Item>
					<ListGroup.Item className="p-0 border-0">
						<a
							href="#"
							className="d-block text-content list-group-item border-0 p-4 border-bottom"
						>
							Category 5
						</a>
					</ListGroup.Item>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};

export default Categories;
