import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";

const DetailsAccordion = ({ props }) => {
	const { allProducts, productId } = props;
	const [details, setDetails] = useState("");
	useEffect(() => {
		const product = allProducts.filter(
			(specProduct) => specProduct._id === productId
		);
		setDetails(product[0].description);
	}, []);
	return (
		<Accordion.Item eventKey="0" className="border-0 border-bottom">
			<Accordion.Header className="text-header text-prime">
				Details
			</Accordion.Header>
			<Accordion.Body className="p-3">{details}</Accordion.Body>
		</Accordion.Item>
	);
};

export default DetailsAccordion;
