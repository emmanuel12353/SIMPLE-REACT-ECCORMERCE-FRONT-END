import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo1 from './logo1.png';
import logo2 from './logo2.png';
import logo3 from './logo3.png';
import logo4 from './logo4.png';

const Updates = () => (
  <div className="c">
	<div class="newsletter section" id="suscribed">
		<div class="newsletter__container bd-grid">
			<div class="newsletter__suscribe">
				<h2 class="section-title">OUR NEWSLETTER</h2>
				<p class="newsletter__description">Promotion new products and sales. Directly to your</p>

				<form action="" class="newsletter__form">
					<input type="" class="newsletter__input" placeholder="Enter your email" />
					<Link to='' class="button-1">SUSCRIBE</Link>
				</form>
			</div>
		</div>	
	</div>
	<div class="sponsors section">
		<div class="sponsors__container bd-grid">
			<div class="sponsors__logo">
				<img src={logo1} alt="" />
			</div>

			<div class="sponsors__logo">
				<img src={logo2} alt="" />
			</div>

			<div class="sponsors__logo">
				<img src={logo3} alt="" />
			</div>

			<div class="sponsors__logo">
				<img src={logo4} alt="" />
			</div>
		</div>
	</div>
</div>
);

export default Updates;










