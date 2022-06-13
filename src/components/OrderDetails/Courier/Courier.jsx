import { Accordion } from "react-bootstrap";

const Courier = () => {
	return (
		<Accordion.Item eventKey="3">
			<Accordion.Header>Courier</Accordion.Header>
			<Accordion.Body>
				<p className="m-0 p-0 text-content">Courier name</p>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default Courier;
