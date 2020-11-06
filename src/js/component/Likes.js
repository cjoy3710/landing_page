import React, { useState } from "react";

//create your first component
export function Likes() {
	const [likes, updateLikes] = useState(0);

	return (
		<div className="likes-counter">
			<button
				className="btn btn-info likes-button"
				onClick={() => updateLikes(likes - 1)}>
				-
			</button>
			<h1>{likes}</h1>
			<button
				className="btn btn-info likes-button"
				onClick={() => updateLikes(likes + 1)}>
				+
			</button>
		</div>
	);
}
