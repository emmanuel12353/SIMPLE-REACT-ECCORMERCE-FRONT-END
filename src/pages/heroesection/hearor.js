import React from 'react';
import { Link } from 'react-router-dom';
import home from '../heroesection/img/home.png';
import Product from '../component/products/products';
import Product2 from '../component/products/product2';



const hearor = () => {
	return (
 <div className="home">
		<div className="home__container bd-grid">
			<div className="home__data">
				<h1 className="home__title">NEW<br /><span>ARRIVALS</span></h1>
				<Link to="#featured" className="button">GO SHOPPING</Link>
			</div>

			<img src={home} alt="" className="home__img"/>
		</div>
		<Product />
	<Product2 /> 
    </div>
	
);
	}

export default hearor;
