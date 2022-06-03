import { Container } from "react-bootstrap";
import Buttons from "../components/Account/Buttons/Buttons";
import Details from "../components/Account/Details/Details";
import Orders from "../components/Account/Orders/Orders";

const Account = () => {
	return (
		<Container style={{maxWidth: "40rem"}}>
			<h1 className="text-center display-1 text-header text-prime ps-1 pt-5 mb-5">
				Account
			</h1>
			<Details />
			<Buttons />
			<Orders />
		</Container>
	);
};

export default Account;
