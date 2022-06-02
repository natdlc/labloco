import { Form, Button, Col, Accordion } from "react-bootstrap";
import ProductHeaders from "./ProductHeaders/ProductHeaders";
import QtyCartForm from "./QtyCartForm/QtyCartForm";
import DetailsAccordion from "./DetailsAccordion/DetailsAccordion";
import ShippingAccordion from "./ShippingAccordion/ShippingAccordion";
import PayMethodsAccordion from "./PayMethodsAccordion/PayMethodsAccordion";

const ProductDetails = () => {
	return (
		<>
			<ProductHeaders />
			<QtyCartForm />
			<Accordion>
				<DetailsAccordion />
				<ShippingAccordion />
				<PayMethodsAccordion />
			</Accordion>
		</>
	);
};

export default ProductDetails;
