import { Accordion } from "react-bootstrap";
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
			<Accordion alwaysOpen={true}>
				<DetailsAccordion props={props} />
				<ShippingAccordion />
				<PayMethodsAccordion />
			</Accordion>
		</>
	);
};

export default ProductDetails;
