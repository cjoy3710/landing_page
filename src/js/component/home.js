import React from "react";
import { Header } from "./Header.js";
import { Navbar } from "./Navbar.js";
import { Card } from "./Card.js";
import { Likes } from "./Likes.js";
import { Footer } from "./Footer.js";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<Navbar />
			<Header />
			<div className="row">
				<div className="col-md-3">
					<Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida id nulla id fringilla. Maecenas purus velit, tristique sit amet nisl vitae, convallis iaculis mi. " />
				</div>
				<div className="col-md-3">
					<Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida id nulla id fringilla. Maecenas purus velit, tristique sit amet nisl vitae, convallis iaculis mi. " />
				</div>
				<div className="col-md-3">
					<Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida id nulla id fringilla. Maecenas purus velit, tristique sit amet nisl vitae, convallis iaculis mi. " />
				</div>
				<div className="col-md-3">
					<Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida id nulla id fringilla. Maecenas purus velit, tristique sit amet nisl vitae, convallis iaculis mi. " />
				</div>
				<Footer />
			</div>
		</div>
	);
}
