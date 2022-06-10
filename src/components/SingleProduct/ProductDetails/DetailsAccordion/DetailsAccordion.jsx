import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";

const DetailsAccordion = ({ props }) => {
	const { allActiveProducts, productId } = props;
	const [details, setDetails] = useState("");
	useEffect(() => {
		if (allActiveProducts.length) {
			const product = allActiveProducts.filter(
				(specProduct) => specProduct._id === productId
			);
			setDetails(product[0].description);
		} else {
			return;
		}
	}, [allActiveProducts]);
	return (
		<Accordion.Item eventKey="0" className="border-0 border-bottom">
			<Accordion.Header className="text-header text-prime">
				Details
			</Accordion.Header>
			<Accordion.Body className="p-3 text-content">{details}</Accordion.Body>
		</Accordion.Item>
	);
};

export default DetailsAccordion;
