import { useEffect, useState } from "react";

import AppNav from "./components/AppNav/AppNav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import Shipping from "./pages/Shipping";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";
import { ProductProvider } from "./ProductContext";
import { CategoryProvider } from "./CategoryContext";
import { CourierProvider } from "./CourierContext";

function App() {
	//user context
	const [user, setUser] = useState({
		accessToken: localStorage.getItem("accessToken"),
		isAdmin: localStorage.getItem("isAdmin") === "true",
	});

	//user
	const unsetUser = () => {
		localStorage.clear();
	};

	//courier context
	const [allCouriers, setAllCouriers] = useState([]);
	const [fetchedCouriersForOptions, setFetchedCouriersForOptions] = useState(
		[]
	);

	//courier
	const fetchAllCouriers = async () => {
		await fetch(
			"https://labloco-medical-supplies.herokuapp.com/couriers/active"
		)
			.then((response) => response.json())
			.then((result) => {
				setAllCouriers(result);
			})
			.catch((err) => err);
	};

	//courier
	const fetchForCourierOptions = async () => {
		await fetch(
			"https://labloco-medical-supplies.herokuapp.com/couriers/active"
		)
			.then((response) => response.json())
			.then((result) => {
				setFetchedCouriersForOptions(
					result.map((courier) => {
						return (
							<option key={courier._id} value={courier.courierName}>
								{courier.courierName}
							</option>
						);
					})
				);
			})
			.catch((err) => {
				return (
					<>
						<p className="text-subheader text-danger">{err.message}</p>
					</>
				);
			});
	};

	//product context
	const [fetchedProductsForOptions, setFetchedProductsForOptions] = useState(
		[]
	);
	const [fetchedActiveProductsForOptions, setFetchedActiveProductsForOptions] =
		useState([]);
	const [allProducts, setAllProducts] = useState([]);
	const [allActiveProducts, setAllActiveProducts] = useState([]);

	//product
	const fetchForOptions = async () => {
		await fetch("https://labloco-medical-supplies.herokuapp.com/products/", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((response) => response.json())
			.then((result) => {
				setFetchedProductsForOptions(
					result.map((product) => {
						return (
							<option key={product._id} value={product.name}>
								{product.name}
							</option>
						);
					})
				);
			})
			.catch((err) => {
				return (
					<>
						<p className="text-subheader text-danger">{err.message}</p>
					</>
				);
			});
	};

	//product
	const fetchForActiveOptions = async () => {
		await fetch(
			"https://labloco-medical-supplies.herokuapp.com/products/active"
		)
			.then((response) => response.json())
			.then((result) => {
				setFetchedActiveProductsForOptions(
					result.map((product) => {
						return (
							<option key={product._id} value={product.name}>
								{product.name}
							</option>
						);
					})
				);
			})
			.catch((err) => {
				return (
					<>
						<p className="text-subheader text-danger">{err.message}</p>
					</>
				);
			});
	};

	//product
	const fetchAllProducts = async () => {
		await fetch("https://labloco-medical-supplies.herokuapp.com/products/", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((response) => response.json())
			.then((result) => {
				setAllProducts(result);
			})
			.catch((err) => err);
	};

	//product
	const fetchAllActiveProducts = async () => {
		await fetch(
			"https://labloco-medical-supplies.herokuapp.com/products/active"
		)
			.then((response) => response.json())
			.then((result) => {
				setAllActiveProducts(result);
			})
			.catch((err) => err);
	};

	//category context
	const [allCategories, setAllCategories] = useState([]);
	const [allActiveCategories, setAllActiveCategories] = useState([]);
	const [fetchedCategoriesForOptions, setFetchedCategoriesForOptions] =
		useState([]);
	const [
		fetchedActiveCategoriesForOptions,
		setFetchedActiveCategoriesForOptions,
	] = useState([]);

	//category
	const fetchAllCategories = async () => {
		await fetch(
			"https://labloco-medical-supplies.herokuapp.com/categories/all/",
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			}
		)
			.then((response) => response.json())
			.then((result) => {
				setAllCategories(result);
			})
			.catch((err) => err);
	};

	//category
	const fetchCategoriesForOptions = async () => {
		await fetch(
			"https://labloco-medical-supplies.herokuapp.com/categories/all/",
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			}
		)
			.then((response) => response.json())
			.then((result) => {
				setFetchedCategoriesForOptions(
					result.map((category) => {
						return (
							<option key={category._id} value={category.name}>
								{category.name}
							</option>
						);
					})
				);
			})
			.catch((err) => {
				return (
					<>
						<p className="text-subheader text-danger">{err.message}</p>
					</>
				);
			});
	};

	//category
	const fetchActiveCategories = async () => {
		await fetch(
			"https://labloco-medical-supplies.herokuapp.com/categories/active/"
		)
			.then((response) => response.json())
			.then((result) => {
				setAllActiveCategories(result);
			})
			.catch((err) => err);
	};

	//category
	const fetchActiveCategoriesForOptions = async () => {
		await fetch(
			"https://labloco-medical-supplies.herokuapp.com/categories/all/"
		)
			.then((response) => response.json())
			.then((result) => {
				setFetchedActiveCategoriesForOptions(
					result.map((category) => {
						return (
							<option key={category._id} value={category.name}>
								{category.name}
							</option>
						);
					})
				);
			})
			.catch((err) => {
				return (
					<>
						<p className="text-subheader text-danger">{err.message}</p>
					</>
				);
			});
	};

	useEffect(() => {
		//products
		fetchForOptions();
		fetchAllProducts();
		fetchForActiveOptions();
		fetchAllActiveProducts();

		//couriers
		fetchAllCouriers();

		//categories
		fetchAllCategories();
		fetchActiveCategories();
		fetchCategoriesForOptions();
		fetchActiveCategoriesForOptions();
	}, []);

	return (
		<UserProvider value={{ user, setUser, unsetUser }}>
			<CourierProvider
				value={{
					//user
					allCouriers,
					fetchedCouriersForOptions,
					fetchAllCouriers,
					fetchForCourierOptions,
				}}
			>
				<CategoryProvider
					value={{
						//admin
						allCategories,
						fetchedCategoriesForOptions,
						fetchAllCategories,
						setAllCategories,
						fetchCategoriesForOptions,

						//user
						allActiveCategories,
						fetchedActiveCategoriesForOptions,
						fetchActiveCategories,
						fetchActiveCategoriesForOptions,
					}}
				>
					<ProductProvider
						value={{
							//admin
							fetchAllProducts,
							setAllProducts,
							allProducts,
							fetchForOptions,
							fetchedProductsForOptions,

							//user
							allActiveProducts,
							fetchAllActiveProducts,
							fetchForActiveOptions,
							fetchedActiveProductsForOptions,
						}}
					>
						<Router>
							<AppNav />
							<Container fluid={true} className="p-0">
								<Routes>
									<Route path="/" element={<Home />} />
									<Route path="/collections" element={<Products />} />
									<Route
										path="/product/:productId"
										element={<SingleProduct />}
									/>
									<Route path="/about" element={<About />} />
									<Route path="/register" element={<Registration />} />
									<Route path="/login" element={<Login />} />
									<Route path="/profile" element={<Account />} />
									<Route path="/contact" element={<Contact />} />
									<Route path="/shipping" element={<Shipping />} />
									<Route path="/cart" element={<Cart />} />
									<Route path="/checkout" element={<Checkout />} />
									<Route path="/admin" element={<Admin />} />
									<Route path="/logout" element={<Logout />} />
									<Route path="*" element={<NotFound />} />
								</Routes>
							</Container>
							<Footer />
						</Router>
					</ProductProvider>
				</CategoryProvider>
			</CourierProvider>
		</UserProvider>
	);
}

export default App;
