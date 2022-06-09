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

function App() {
	//user context
	const [user, setUser] = useState({
		accessToken: localStorage.getItem("accessToken"),
		isAdmin: localStorage.getItem("isAdmin") === "true",
	});

	const unsetUser = () => {
		localStorage.clear();
	};

	//product context
	const [fetchedProductsForOptions, setFetchedProductsForOptions] = useState(
		[]
	);
	const [allProducts, setAllProducts] = useState([]);

	//category context
	const [allCategories, setAllCategories] = useState([]);
	const [fetchedCategoriesForOptions, setFetchedCategoriesForOptions] =
		useState([]);

	//for product context
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

	// for product context
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

	// for category context
	const fetchAllCategories = async () => {
		console.log("rendering");
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

	// for category context
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

	useEffect(() => {
		fetchAllProducts();
		fetchForOptions();
		fetchAllCategories();
		fetchCategoriesForOptions();
	}, []);

	return (
		<UserProvider value={{ user, setUser, unsetUser }}>
			<CategoryProvider
				value={{
					fetchAllCategories,
					setAllCategories,
					allCategories,
					fetchCategoriesForOptions,
					fetchedCategoriesForOptions,
				}}
			>
				<ProductProvider
					value={{
						fetchAllProducts,
						setAllProducts,
						allProducts,
						fetchForOptions,
						fetchedProductsForOptions,
					}}
				>
					<Router>
						<AppNav />
						<Container fluid={true} className="p-0">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/collections" element={<Products />} />
								<Route path="/product/:productId" element={<SingleProduct />} />
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
		</UserProvider>
	);
}

export default App;
