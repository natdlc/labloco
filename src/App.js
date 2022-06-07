import { useEffect, useState } from "react";

import AppNav from "./components/AppNav/AppNav";
import Home from "./pages/Home";
import Products from "./pages/Products";
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

function App() {
	const [user, setUser] = useState({
		accessToken: localStorage.getItem("accessToken"),
		isAdmin: localStorage.getItem("isAdmin") === "true",
	});

	const [allProducts, setAllProducts] = useState([]);
	const [fetchedProductsForOptions, setFetchedProductsForOptions] = useState(
		[]
	);

	const unsetUser = () => {
		localStorage.clear();
	};

	const fetchForOptions = () => {
		console.log("fetch for options rendering");
		fetch("https://labloco-medical-supplies.herokuapp.com/products/", {
			headers: {
				"Content-Type": "application/json",
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

	const fetchAllProducts = () => {
		console.log("fetch all products rendering");
		fetch("https://labloco-medical-supplies.herokuapp.com/products/", {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((response) => response.json())
			.then((result) => {
				setAllProducts(result);
			})
			.catch((err) => err);
	};

	useEffect(() => {
		fetchAllProducts();
		fetchForOptions();
	}, []);

	return (
		<UserProvider value={{ user, setUser, unsetUser }}>
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
							<Route path="/product" element={<SingleProduct />} />
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
		</UserProvider>
	);
}

export default App;
