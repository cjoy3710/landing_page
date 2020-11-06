import React from "react";
import PropTypes from "prop-types";
import Image from "../../img/rigo-baby.jpg";

//create your first component
export function Card(props) {
	return (
		<div className="myCard">
			<div className="card text-center">
				<img src={Image} className="card-img-top" alt="..."></img>
				<div className="card-body">
					<h5 className="card-title">Card Title</h5>
					<p className="card-text">{props.description}</p>
					<a href="#" className="btn btn-primary">
						Find Out More
					</a>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	menu: PropTypes.string,
	description: PropTypes.string,
	buttontext: PropTypes.string
};
