import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Details = () => {
	const [email, setEmail] = useState("");

	useEffect(() => {
		fetch("https://labloco-medical-supplies.herokuapp.com/users/profile", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((response) => response.json())
			.then((profile) => {
				setEmail(profile.email);
			});
	}, []);

	return (
		<Container>
			<h2 className="display-5 text-prime text-header">Details</h2>
			<Row>
				<Col className="">
					<h4 className="text-subheader p-0 m-0">Email</h4>
					<p className="text-content">{email}</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Details;
