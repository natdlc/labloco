import { Accordion } from "react-bootstrap";

const Products = () => {
	return (
		<Accordion.Item eventKey="7">
			<Accordion.Header>Products</Accordion.Header>
			<Accordion.Body className="m-0 p-0">
				<div className="d-flex gap-4 m-0 p-2 border-prime flex-wrap">
					<div className="m-0 p-0" style={{ maxWidth: "4rem" }}>
						<img
							src="https://via.placeholder.com/400x400"
							className="img-fluid d-block"
							alt=""
						/>
					</div>
					<div className="m-0 p-0">
						<p className="m-0 p-0 text-subheader">Product name</p>
						<p className="m-0 p-0">product name here</p>
					</div>
					<div className="m-0 p-0">
						<p className="m-0 p-0 text-subheader">Quantity</p>
						<p className="m-0 p-0">6</p>
					</div>
					<div className="m-0 p-0">
						<p className="m-0 p-0 text-subheader">Price</p>
						<p className="m-0 p-0">₱555</p>
					</div>
				</div>
				<div className="d-flex gap-4 m-0 p-2 border-prime flex-wrap">
					<div className="m-0 p-0" style={{ maxWidth: "4rem" }}>
						<img
							src="https://via.placeholder.com/400x400"
							className="img-fluid d-block"
							alt=""
						/>
					</div>
					<div className="m-0 p-0">
						<p className="m-0 p-0 text-subheader">Product name</p>
						<p className="m-0 p-0">product name here</p>
					</div>
					<div className="m-0 p-0">
						<p className="m-0 p-0 text-subheader">Quantity</p>
						<p className="m-0 p-0">6</p>
					</div>
					<div className="m-0 p-0">
						<p className="m-0 p-0 text-subheader">Price</p>
						<p className="m-0 p-0">₱555</p>
					</div>
				</div>
				<div className="d-flex gap-4 m-0 p-2 border-prime flex-wrap">
					<div className="m-0 p-0" style={{ maxWidth: "4rem" }}>
						<img
							src="https://via.placeholder.com/400x400"
							className="img-fluid d-block"
							alt=""
						/>
					</div>
					<div className="m-0 p-0">
						<p className="m-0 p-0 text-subheader">Product name</p>
						<p className="m-0 p-0">product name here</p>
					</div>
					<div className="m-0 p-0">
						<p className="m-0 p-0 text-subheader">Quantity</p>
						<p className="m-0 p-0">6</p>
					</div>
					<div className="m-0 p-0">
						<p className="m-0 p-0 text-subheader">Price</p>
						<p className="m-0 p-0">₱555</p>
					</div>
				</div>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default Products;
