import React from "react";
import { Link } from 'react-router-dom';
import feature1 from './img/feature1.png';
import feature2 from './img/feature2.png';
import feature3 from './img/feature3.png';
import feature4 from './img/feature4.png';
import backpackWoman from './img/backpackWoman.png';
import backpackMan from './img/backpackMan.png';


const Product = () => {
	return (
  <div className="cont">
<div className="collection section">
		<div className="collection__container bd-grid">
			<div className="collection__box">
				<img src={backpackMan} alt="" className="collection__img"/>

				<div className="collection__data">
					<h2 className="collection__title"><span className="collection__subtitle">Men</span><br />Backpack</h2>
					<Link to="#" className="collection__view">View collection</Link>
				</div>
			</div>

			<div className="collection__box">
				<div className="collection__data">
					<h2 className="collection__title"><span className="collection__subtitle">Women</span><br />Backpack</h2>
					<Link href="#" className="collection__view">View collection</Link>
				</div>

				<img src={backpackWoman}  alt="" className="collection__img"/>
			</div>
		</div>
	</div>


	<div className="featured" id="featured">
		<h2 className="section-title">FEATURED PRODUCTS</h2>
		<Link href="#" className="section-all">View All</Link>

		<div className="featured__container bd-grid">
			<div className="featured__product">
				<div className="featured__box">
					<div className="featured__new">NEW</div>
					<img src={feature3} alt="" className="featured__img"/>
				</div>

			<div className="featured__data">
				<h3 className="featured__name">Headphone Oe Black</h3>
				<span className="featured__preci">$29</span>
			</div>	
			</div>

			<div className="featured__product">
				<div className="featured__box">
					<div className="featured__new">NEW</div>
					<img src={feature4} alt="" className="featured__img"/>
				</div>

			<div className="featured__data">
				<h3 className="featured__name">Speaker Beats Pill</h3>
				<span className="featured__preci">$199</span>
			</div>	
			</div>

			<div className="featured__product">
				<div className="featured__box">
					<div className="featured__new">NEW</div>
					<img src={feature1} alt="" className="featured__img"/>
				</div>

			<div className="featured__data">
				<h3 className="featured__name">Apple Air Pods</h3>
				<span className="featured__preci">$122</span>
			</div>	
			</div>

			<div className="featured__product">
				<div className="featured__box">
					<div className="featured__new">NEW</div>
					<img src={feature2} alt="" className="featured__img"/>
				</div>

			<div className="featured__data">
				<h3 className="featured__name">Smartwatch F9 Black</h3>
				<span className="featured__preci">$99</span>
			</div>	
			</div>

		</div>
	</div>
</div>
);
	}
	
	

export default Product;





 
