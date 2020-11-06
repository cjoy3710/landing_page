import React from "react";

//create your first component
export function Header() {
	return (
		<div className="jumbotron mr-auto">
			<h1>A Warm Welcome</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
				gravida id nulla id fringilla. Maecenas purus velit, tristique
				sit amet nisl vitae, convallis iaculis mi. Quisque metus nunc,
				interdum a odio quis, molestie fringilla eros. Nunc rhoncus
				vulputate nunc, at finibus lacus tincidunt suscipit.
			</p>
			<button className="btn btn-primary">Call to Action!</button>
		</div>
	);
}
