import { Row, Col, Card } from "react-bootstrap";
import "./HomeReviews.css";

const HomeReviews = () => {
	return (
		<>
			<h1 className="text-header text-prime py-5 text-center">
				What our customers say
			</h1>
			<Row className="home-reviews-row">
				<Col sm={5} md={4} lg={3}>
					<Card>
						<Card.Img variant="top" src="https://via.placeholder.com/600x300" />
						<Card.Body>
							<blockquote className="blockquote mb-0">
								<p className="text-content">
									{" "}
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Integer posuere erat a ante.{" "}
								</p>
								<footer className="blockquote-footer text-content">
									John Smith, from <cite title="Source Title">Pasig</cite>
								</footer>
							</blockquote>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={5} md={4} lg={3}>
					<Card>
						<Card.Img variant="top" src="https://via.placeholder.com/600x300" />
						<Card.Body>
							<blockquote className="blockquote mb-0">
								<p className="text-content">
									{" "}
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Integer posuere erat a ante.{" "}
								</p>
								<footer className="blockquote-footer text-content">
									John Smith, from <cite title="Source Title">Pasig</cite>
								</footer>
							</blockquote>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={5} md={4} lg={3}>
					<Card>
						<Card.Img variant="top" src="https://via.placeholder.com/600x300" />
						<Card.Body>
							<blockquote className="blockquote mb-0">
								<p className="text-content">
									{" "}
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Integer posuere erat a ante.{" "}
								</p>
								<footer className="blockquote-footer text-content">
									John Smith, from <cite title="Source Title">Pasig</cite>
								</footer>
							</blockquote>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={5} md={4} lg={3}>
					<Card>
						<Card.Img variant="top" src="https://via.placeholder.com/600x300" />
						<Card.Body>
							<blockquote className="blockquote mb-0">
								<p className="text-content">
									{" "}
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Integer posuere erat a ante.{" "}
								</p>
								<footer className="blockquote-footer text-content">
									John Smith, from <cite title="Source Title">Pasig</cite>
								</footer>
							</blockquote>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={5} md={4} lg={3}>
					<Card>
						<Card.Img variant="top" src="https://via.placeholder.com/600x300" />
						<Card.Body>
							<blockquote className="blockquote mb-0">
								<p className="text-content">
									{" "}
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Integer posuere erat a ante.{" "}
								</p>
								<footer className="blockquote-footer text-content">
									John Smith, from <cite title="Source Title">Pasig</cite>
								</footer>
							</blockquote>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={5} md={4} lg={3}>
					<Card>
						<Card.Img variant="top" src="https://via.placeholder.com/600x300" />
						<Card.Body>
							<blockquote className="blockquote mb-0">
								<p className="text-content">
									{" "}
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Integer posuere erat a ante.{" "}
								</p>
								<footer className="blockquote-footer text-content">
									John Smith, from <cite title="Source Title">Pasig</cite>
								</footer>
							</blockquote>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default HomeReviews;
