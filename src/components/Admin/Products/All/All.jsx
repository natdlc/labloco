import { useState, useEffect, useContext } from "react";
import { Button, Container, Row, Col, Modal, Table } from "react-bootstrap";
import ProductContext from "../../../../ProductContext";

const All = () => {
	const { fetchAllProducts, allProducts } = useContext(ProductContext);

	const [show, setShow] = useState(false);
	const handleClose = () => {
		setProducts([]);
		setShow(false);
	};
	const handleShow = () => setShow(true);

	const [products, setProducts] = useState([]);

	const asyncFetchHandler = async () => {
		// await fetchAllProducts();
		const productsArr = allProducts.map((product) => {
			return (
				<tr key={product._id}>
					<td>
						{/* {product.image.length ? (
							<img
								src={`https://labloco-medical-supplies.herokuapp.com/products/image/${product._id}`}
								alt="product photo"
								className="img-fluid"
								style={{ maxWidth: "40px" }}
							/>
						) : (
							<img
								src={"https://via.placeholder.com/404x404"}
								alt="product photo"
								className="img-fluid"
								style={{ maxWidth: "40px" }}
							/>
						)} */}
					</td>
					<td>
						<p>{product.name}</p>
					</td>
					<td>
						<p>{product.isActive ? "active" : "inactive"}</p>
					</td>
					<td>
						<p>{product.stocks}</p>
					</td>
					<td>
						<p>₱{product.price}</p>
					</td>
				</tr>
			);
		});
		setProducts(productsArr);
	};

	useEffect(() => {
		if (show) asyncFetchHandler(show);
	}, [show]);

	const closeHandler = (e) => {
		e.preventDefault();
		setProducts([]);
		handleClose();
	};

	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Button className="custom-btn-6" onClick={handleShow}>
						All products overview
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>All products overview</Modal.Title>
						</Modal.Header>
						<Modal.Body className="p-0">
							<Table striped hover className="text-start">
								<thead>
									<tr>
										<th className="px-1 py-2">Image</th>
										<th className="px-1 py-2">Name</th>
										<th className="px-1 py-2">Status</th>
										<th className="px-1 py-2">Stocks</th>
										<th className="px-1 py-2">Price</th>
									</tr>
								</thead>
								<tbody>{products}</tbody>
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
