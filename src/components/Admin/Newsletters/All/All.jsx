import { useState, useEffect } from "react";
import { Button, Container, Row, Col, Modal, Table } from "react-bootstrap";

const All = () => {
	const [newsletters, setNewsletters] = useState([]);

	const [show, setShow] = useState(false);
	const handleClose = () => {
		setNewsletters([]);
		setShow(false);
	};
	const handleShow = () => setShow(true);

	const asyncFetchHandler = async () => {
		fetch("https://labloco-medical-supplies.herokuapp.com/newsletters", {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((response) => response.json())
			.then((newsletters) => {
				const newslettersArr = newsletters.map((newsletter) => {
					return (
						<tr key={newsletter._id}>
							<td className="p-0 m-0 ps-2">
								<p className="p-0 m-0">{newsletter.email}</p>
							</td>
						</tr>
					);
				});
				setNewsletters(newslettersArr);
			});
	};

	useEffect(() => {
		if (show) asyncFetchHandler(show);
	}, [show]);

	const closeHandler = (e) => {
		e.preventDefault();
		setNewsletters([]);
		handleClose();
	};

	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Button className="custom-btn-6" onClick={handleShow}>
						All newsletters overview
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>All newsletters overview</Modal.Title>
						</Modal.Header>
						<Modal.Body className="p-0">
							<Table striped hover className="text-start">
								<thead>
									<tr>
										<th className="p-2">Email</th>
									</tr>
								</thead>
								<tbody>{newsletters}</tbody>
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
