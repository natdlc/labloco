import AppNav from "./components/AppNav/AppNav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Registration from "./pages/Registration";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<AppNav />
			<Container fluid={true} className="p-0">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/collections" element={<Products />} />
					<Route path="/product" element={<SingleProduct />} />
					<Route path="/register" element={<Registration />} />
				</Routes>
			</Container>
			<Footer />
		</Router>
	);
}

export default App;
