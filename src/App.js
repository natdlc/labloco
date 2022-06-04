import { useState } from "react";

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

function App() {
  const [user, setUser] = useState({
    accessToken: localStorage.getItem("accessToken"),
    isAdmin: localStorage.getItem("isAdmin") === "true",
  });

  const unsetUser = () => {
    localStorage.clear();
  };

  return (
    <UserProvider value={{ user, setUser, unsetUser }}>
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
    </UserProvider>
  );
}

export default App;
