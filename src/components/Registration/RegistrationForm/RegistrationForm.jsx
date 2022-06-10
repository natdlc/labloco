import { useEffect, useState, useContext } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Navigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const RegistrationForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [verifyPassword, setVerifyPassword] = useState("");

	const [regFailed, setRegFailed] = useState(false);

	const emailChangeHandler = (e) => {
		setRegFailed(false);
		setEmail(e.target.value);
	};
	const passwordChangeHandler = (e) => {
		setPassword(e.target.value);
	};
	const vPasswordChangeHandler = (e) => {
		setVerifyPassword(e.target.value);
	};

	const [isActive, setIsActive] = useState(false);
	const [isRegistered, setIsRegistered] = useState(false);

	const registerUser = (e) => {
		e.preventDefault();
		fetch("https://labloco-medical-supplies.herokuapp.com/users/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})
			.then((result) => result.json())
			.then((data) => {
				if (data.message.includes("failed")) {
					setRegFailed(true);
					setIsRegistered(false);
				} else {
					Swal.fire({
						title: "Welcome to LabLoco!",
						icon: "success",
						iconColor: "#17355e",
						color: "#17355e",
						confirmButtonColor: "#17355e",
					});
					setIsRegistered(true);
				}
			});
		clearFields();
	};

	useEffect(() => {
		if (email && password && verifyPassword && password === verifyPassword) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [email, password, verifyPassword]);

	const clearFields = () => {
		setEmail("");
		setPassword("");
		setVerifyPassword("");
	};

	return isRegistered ? (
		<Navigate to="/login" />
	) : (
		<Container className="pt-3 pb-5 mb-5">
			<Row>
				<Col>
					<Form
						onSubmit={registerUser}
						style={{ maxWidth: "18rem" }}
						className="mx-auto"
					>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Control
								onChange={emailChangeHandler}
								className="border-prime text-content"
								type="email"
								placeholder="Email"
								value={email}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Control
								onChange={passwordChangeHandler}
								className="border-prime text-content"
								type="password"
								placeholder="Password"
								value={password}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Control
								onChange={vPasswordChangeHandler}
								className="border-prime text-content"
								type="password"
								placeholder="Verify Password"
								value={verifyPassword}
							/>
						</Form.Group>

						{regFailed ? (
							<p className="text-danger">
								Sign up failed: Email already registered.
							</p>
						) : (
							false
						)}

						{isActive ? (
							<Button className="custom-btn-2" type="submit">
								Submit
							</Button>
						) : (
							<Button disabled className="custom-btn-2" type="submit">
								Submit
							</Button>
						)}
						<div className="py-3">
								<p className="text-content">Already have an account? Log in <Button as={ Link} to="/login" className="custom-btn-link">here</Button></p>
						</div>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default RegistrationForm;
