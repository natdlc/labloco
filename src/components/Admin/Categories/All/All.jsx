import { useState, useEffect } from "react";
import { Button, Container, Row, Col, Modal, Table } from "react-bootstrap";

const All = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => {
		setCategories([]);
		setShow(false);
	};
	const handleShow = () => setShow(true);

	const [categories, setCategories] = useState([]);

	const asyncFetchHandler = async () => {
		fetch("https://labloco-medical-supplies.herokuapp.com/categories/all/", {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((response) => response.json())
			.then((categories) => {
				const categoriesArr = categories.map((category) => {
					return (
						<tr key={category._id}>
							<td className="p-2">
								<p>{category.name}</p>
							</td>
							<td className="p-2">
								<p>{String(category.isActive)}</p>
							</td>
						</tr>
					);
				});
				setCategories(categoriesArr);
			});
	};

	useEffect(() => {
		if (show) asyncFetchHandler(show);
	}, [show]);

	const closeHandler = (e) => {
		e.preventDefault();
		setCategories([]);
		handleClose();
	};

	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Button className="custom-btn-6" onClick={handleShow}>
						All categories overview
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>All categories overview</Modal.Title>
						</Modal.Header>
						<Modal.Body className="p-0">
							<Table striped hover className="text-start">
								<thead>
									<tr>
										<th className="p-2">Name</th>
										<th className="p-2">Active</th>
									</tr>
								</thead>
								<tbody>{categories}</tbody>
							</Table>
						</Modal.Body>
						<Modal.Footer>
							<Button className="custom-btn-2" onClick={closeHandler}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</Col>
			</Row>
		</Container>
	);
};

export default All;
