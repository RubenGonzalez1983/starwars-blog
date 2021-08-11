import React from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../views/FavoritesContext";

export const Navbar = () => {
	let activateDropdown = () => {
		const dropdownBtn = document.querySelector(".dropdown_button");
		const dropdownMenu = document.querySelector(".dropdown_menu");
		dropdownMenu.classList.toggle("hide");
	};

	const [favorites, setFavorites] = React.useContext(FavoritesContext);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/home">
				<img
					className="logo"
					src="https://i.pinimg.com/originals/17/66/da/1766da0b582ed8ab014f76c780567e3f.jpg"
				/>
			</Link>

			<div className="dropdown">
				<button className="dropdown_button" onClick={activateDropdown}>
					Favorites
					<i className="fas fa-sort-down fa-lg downbutton" />
				</button>

				<div className="dropdown_menu hide">
					<ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton1">
						{favorites.map((item, index) => {
							return (
								<li key={index} className="dropdown-item">
									<a className="dropdown-item" href="#">
										{item}
									</a>
									<i className="far fa-trash-alt" />
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
