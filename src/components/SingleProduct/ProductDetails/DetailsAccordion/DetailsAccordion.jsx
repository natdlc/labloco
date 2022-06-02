import { Accordion } from "react-bootstrap";

const DetailsAccordion = () => {
	return (
		<Accordion.Item eventKey="0" className="border-0 border-bottom">
			<Accordion.Header className="text-header text-prime">
				Details
			</Accordion.Header>
			<Accordion.Body className="p-3">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi nemo
				temporibus dolor cumque animi nobis nesciunt dolorum. At, facere vel.
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default DetailsAccordion;
