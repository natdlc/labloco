import { Row, Col } from "react-bootstrap";
import "./App.css";
import AppNav from "./components/AppNav";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<AppNav />
			<Home />
		</>
	);
}

export default App;
