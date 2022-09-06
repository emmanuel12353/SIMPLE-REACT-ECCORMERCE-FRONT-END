import React from 'react';
import { Link } from 'react-router-dom';
import new1 from './img/new1.png';
import new2 from './img/new2.png';
import new3 from './img/new3.png';
import new4 from './img/new4.png';
import new5 from './img/new5.png';
import new6 from './img/new6.png';


const Product2 = () => {
	return (
	<div>
	<section className="new section" id="new">
		<h2 className="section-title">NEW ARRIVALS</h2>
		<Link href="#" className="section-all"></Link>

		<div className="new__container bd-grid">
			<div className="new__box">
				<img src={new1} alt="" className="new__img"/>

				<div className="new__link">
					<Link href="#" className="button">VIEW PRODUCT</Link>
				</div>
			</div>

			<div className="new__box">
				<img src={new2} alt="" className="new__img"/>

				<div className="new__link">
					<Link href="#" className="button">VIEW PRODUCT</Link>
				</div>
			</div>

			<div className="new__box">
				<img src={new3} alt="" className="new__img"/>

				<div className="new__link">
					<Link href="#" className="button">VIEW PRODUCT</Link>
				</div>
			</div>

			<div className="new__box">
				<img src={new4} alt="" className="new__img"/>

				<div className="new__link">
					<Link href="#" className="button">VIEW PRODUCT</Link>
				</div>
			</div>

			<div className="new__box">
				<img src={new5} alt="" className="new__img"/>

				<div className="new__link">
					<Link href="#" className="button">VIEW PRODUCT</Link>
				</div>
			</div>

			<div className="new__box">
				<img src={new6} alt="" className="new__img"/>

				<div className="new__link">
					<Link href="#" className="button">VIEW PRODUCT</Link>
				</div>
			</div>
		</div>
	</section>
	</div>
);
	}
	

export default Product2;