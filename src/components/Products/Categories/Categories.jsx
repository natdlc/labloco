import { useState, useEffect } from "react";
import { Accordion, ListGroup } from "react-bootstrap";

const Categories = ({ allActiveCategories }) => {
	const [catGroup1, setCatGroup1] = useState([]);
	const [catGroup2, setCatGroup2] = useState([]);

	const catGroup1Arr = allActiveCategories
		.filter((category) => {
			return category.name.includes("featured");
		})
		.map((filteredCategory) => {
			return (
				<ListGroup.Item key={filteredCategory._id} className="p-0 border-0">
					<a
						href={`#${filteredCategory.name}`}
						className="d-block text-content list-group-item border-0 ps-3 border-bottom text-capitalize"
					>
						{filteredCategory.name}
					</a>
				</ListGroup.Item>
			);
		});

	const catGroup2Arr = allActiveCategories
		.filter((category) => {
			return !category.name.includes("featured");
		})
		.map((filteredCategory) => {
			return (
				<ListGroup.Item key={filteredCategory._id} className="p-0 border-0">
					<a
						href={`#${filteredCategory.name}`}
						className="d-block text-content list-group-item border-0 ps-3 border-bottom text-capitalize"
					>
						{filteredCategory.name}
					</a>
				</ListGroup.Item>
			);
		});

	useEffect(() => {
		if (allActiveCategories.length) {
			setCatGroup1(catGroup1Arr);
			setCatGroup2(catGroup2Arr);
		} else {
			return;
		}
	}, [allActiveCategories]);
	return (
		<Accordion>
			<Accordion.Item eventKey="0" className="border-0 border-bottom">
				<Accordion.Header className="text-header text-prime">
					Featured
				</Accordion.Header>
				<Accordion.Body className="p-0">{catGroup1}</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1" className="border-0 border-bottom">
				<Accordion.Header className="text-header text-prime">
					All
				</Accordion.Header>
				<Accordion.Body className="p-0">{catGroup2}</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};

export default Categories;
