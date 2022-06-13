import { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";
import CourierContext from "../../../CourierContext";

const Shipping = () => {
	return (
		<Form.Select className="p-3">
			<option>-- Choose Shipping Method --</option>
			<option value="courier1">Courier 1</option>
			<option value="courier2">Courier 2</option>
			<option value="courier3">Courier 3</option>
		</Form.Select>
	);
};

export default Shipping;
