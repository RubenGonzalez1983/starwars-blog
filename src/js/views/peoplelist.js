import React from "react";

export function PeopleList() {
	let abc = [{ key: "value1" }, { key: "value2" }, { key: "value3" }];
	return abc.map((person, i) => {
		return (
			<div key={i} className="card" style={{ width: "18rem" }}>
				<img src="https://via.placeholder.com/400x200.png?text=Ruben" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{person.key}</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the card&apos;s
						content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		);
	});
}
