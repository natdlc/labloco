import { Accordion } from "react-bootstrap";

const ShippingAccordion = () => {
	return (
		<Accordion.Item eventKey="1" className="border-0 border-bottom">
			<Accordion.Header className="text-header text-prime">
				Shipping
			</Accordion.Header>
			<Accordion.Body className="p-3">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi nemo
				temporibus dolor cumque animi nobis nesciunt dolorum. At, facere vel.
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default ShippingAccordion;
