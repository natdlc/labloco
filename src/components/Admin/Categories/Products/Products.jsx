import { useState, useEffect, useContext } from "react";
import {
	Button,
	Container,
	Row,
	Col,
	Modal,
	Form,
	Table,
} from "react-bootstrap";
import ProductContext from "../../../../ProductContext";

const Products = () => {
	const { fetchAllProducts, allProducts } = useContext(ProductContext);
	const [products, setProducts] = useState([]);

	const [category, setCategory] = useState("");
	const [categoryId, setCategoryId] = useState("");
	const [fetchedCategoriesForOptions, setFetchedCategoriesForOptions] =
		useState([]);

	const [isCategorySelected, setIsCategorySelected] = useState(false);

	const [show, setShow] = useState(false);
	const handleClose = () => {
		setProducts([]);
		setCategory("");
		setFetchedCategoriesForOptions([]);
		setIsCategorySelected(false);
		setShow(false);
	};
	const handleShow = () => {
		if (category) return;
		else {
			setIsCategorySelected(false);
			setCategory("");
		}
		setShow(true);
	};

	const fetchCategoriesForOptions = async () => {
		await fetch(
			`https://labloco-medical-supplies.herokuapp.com/categories/all/`,
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			}
		)
			.then((response) => response.json())
			.then(async (data) => {
				await fetchAllProducts();
				const categoriesArr = data.map((category) => {
					return (
						<option key={category._id} value={category.name}>
							{category.name}
						</option>
					);
				});
				setFetchedCategoriesForOptions(categoriesArr);
			});
	};

	useEffect(() => {
		if (show) fetchCategoriesForOptions();
		else setIsCategorySelected(false);
	}, [show, categoryId]);

	const selectCategoryChangeHandler = async (e) => {
		setIsCategorySelected(false);
		setCategoryId("");
		if (e.target.value === "Click to select a category") {
			setProducts([]);
			setCategory("");
			setFetchedCategoriesForOptions([]);
		} else {
			setCategory(e.target.value);
			await fetch(
				`https://labloco-medical-supplies.herokuapp.com/categories/all/`,
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
					},
				}
			)
				.then((response) => response.json())
				.then(async (result) => {
					const fetchedCategory = result.filter(
						(category) => category.name === e.target.value
					);
					setCategoryId(fetchedCategory[0]._id);
					await fetchAllProducts();
					const productsArr = allProducts.map((product) => {
						return (
							<tr key={product._id}>
								<td>
									{product.image.length ? (
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
									)}
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
									<p className="text-small">₱{product.price}</p>
								</td>
							</tr>
						);
					});
					setProducts(productsArr);
					setIsCategorySelected(true);
				})
				.catch((err) => {
					setIsCategorySelected(false);
				});
		}
	};

	const closeHandler = (e) => {
		e.preventDefault();
		setProducts([]);
		setCategory("");
		setFetchedCategoriesForOptions([]);
		setIsCategorySelected(false);
		handleClose();
	};

	return (
		<Container className="p-0 m-0">
			<Row className="p-0 m-0">
				<Col className="p-0 m-0">
					<Button className="custom-btn-6" onClick={handleShow}>
						View products in category
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>View products in category</Modal.Title>
						</Modal.Header>
						<Modal.Body className="p-0">
							<Form className="p-2 gap-3 d-flex flex-column">
								<Form.Group>
									<Form.Label>Select category to view</Form.Label>
									<Form.Select
										value={category}
										onChange={selectCategoryChangeHandler}
										aria-label="Default select example"
									>
										<option>Click to select a category</option>
										{fetchedCategoriesForOptions}
									</Form.Select>
								</Form.Group>
							</Form>
							{isCategorySelected ? (
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
							) : (
								false
							)}
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

export default Products;
