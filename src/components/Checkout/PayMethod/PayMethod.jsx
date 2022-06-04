import { Form } from "react-bootstrap";

const PayMethod = () => {
  return (
    <Form.Select className="p-3">
      <option>-- Payment Method --</option>
      <option value="gcash">Gcash</option>
      <option value="card">Credit / Debit Card</option>
      <option value="cod">Cash on Delivery</option>
    </Form.Select>
  );
};

export default PayMethod;
