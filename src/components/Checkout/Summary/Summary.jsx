import { Accordion, Container, Row, Col } from "react-bootstrap";
import SummaryItem from "../SummaryItem/SummaryItem";

const Summary = () => {
	return (
		<Accordion className="p-0 m-0">
			<Accordion.Item eventKey="0" className="border-0 border-bottom p-0 m-0">
				<Accordion.Header className="text-header text-prime p-0 m-0">
					Order Summary
				</Accordion.Header>
				<Accordion.Body className="p-0 m-0 pt-5">
					<Container fluid={true} className="p-0 m-0">
						<Row className="p-0 m-0 gap-4">
							<Col xs={12} className="p-0 m-0">
								<SummaryItem />
							</Col>
							<Col xs={12} className="p-0 m-0">
								<SummaryItem />
							</Col>
							<Col xs={12} className="p-0 m-0">
								<SummaryItem />
							</Col>
							<Col xs={12} className="p-0 m-0">
								<SummaryItem />
							</Col>
							<Col xs={12} className="p-0 m-0">
								<SummaryItem />
							</Col>
							<Col xs={12} className="p-0 m-0">
								<SummaryItem />
							</Col>
						</Row>
					</Container>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};

export default Summary;
