import { Form, Button, Col, Accordion } from "react-bootstrap";
import ProductHeaders from "./ProductHeaders/ProductHeaders";
import QtyCartForm from "./QtyCartForm/QtyCartForm";
import DetailsAccordion from "./DetailsAccordion/DetailsAccordion";
import ShippingAccordion from "./ShippingAccordion/ShippingAccordion";
import PayMethodsAccordion from "./PayMethodsAccordion/PayMethodsAccordion";

const ProductDetails = (props) => {
	return (
		<>
			<ProductHeaders props={props} />
			<QtyCartForm props={props} />
			<Accordion>
				<DetailsAccordion props={props} />
				<ShippingAccordion props={props} />
				<PayMethodsAccordion props={props} />
			</Accordion>
		</>
	);
};

export default ProductDetails;
