import React from "react";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<container className="homecontainer">
			<div className="homedivs">
				<a href="/people">
					<div className="picturetitle">People</div>
					<img
						className="homeimage"
						src="https://thumbor.forbes.com/thumbor/711x400/https://blogs-images.forbes.com/clareoconnor/files/2015/11/prod_minifig_main_retina_1224x688_10188-1200x675.jpg?"
					/>
				</a>
			</div>

			<div className="homedivs">
				<a href="/vehicles">
					<div className="picturetitle">Vehicles</div>

					<img
						className="homeimage"
						src="https://cdn.shopify.com/s/files/1/0028/5288/0451/products/product-image-803717164_800x.jpg"
					/>
				</a>
			</div>

			<div className="homedivs">
				<div className="picturetitle">Planets</div>
				<a href="/planets">
					<img
						className="homeimage"
						src="https://www.steinpalast.eu/media/image/magnalister/products/1000px/16981.jpg"
					/>
				</a>
			</div>
		</container>
	</div>
);
