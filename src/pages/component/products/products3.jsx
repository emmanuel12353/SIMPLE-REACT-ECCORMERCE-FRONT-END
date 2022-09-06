import React from 'react';
import { Link } from 'react-router-dom';
import purse1 from './img/purse-1.png';
import purse2 from './img/purse-2.png';
import shoe1 from './img/shoe-1.png';
import shoe2 from './img/shoe-2.png';
import shoe3 from './img/shoe-3.png';
import shoe4 from './img/shoe-4.png';
import shoe5 from './img/shoe-5.png';
import shoe6 from './img/shoe-6.png';
import shoe7 from './img/shoe-7.png';

function Products3() {
  return (
    <div>
   <section className="new section" id="new">
		<h2 className="section-title">OFFERS</h2>
		<Link to="/Collection" className="section-all"></Link>

		<div className="new__container bd-grid">
			<div className="new__box">
				<img src={purse1} alt="" className="new__img"/>

				<div className="new__link">
					<Link to="/Collection" className="button">VIEW PRODUCT</Link>
				</div>
			</div>

			<div className="new__box">
				<img src={purse2} alt="" className="new__img"/>

				<div className="new__link">
					<Link to="/Collection" className="button">VIEW PRODUCT</Link>
				</div>
			</div>

			<div className="new__box">
				<img src={shoe1} alt="" className="new__img"/>

				<div className="new__link">
					<Link to="" className="button">VIEW PRODUCT</Link>
				</div>
			</div>

			<div className="new__box">
				<img src={shoe2} alt="" className="new__img"/>

				<div className="new__link">
					<Link to="" className="button">VIEW PRODUCT</Link>
				</div>
			</div>

			<div className="new__box">
				<img src={shoe3} alt="" className="new__img"/>

				<div className="new__link">
					<Link to="" className="button">VIEW PRODUCT</Link>
				</div>
			</div>
            <div className="new__box">
				<img src={shoe5} alt="" className="new__img"/>

				<div className="new__link">
					<Link to="" className="button">VIEW PRODUCT</Link>
				</div>
			</div>
            <div className="new__box">
				<img src={shoe6} alt="" className="new__img"/>

				<div className="new__link">
					<Link to="" className="button">VIEW PRODUCT</Link>
				</div>
			</div>
            <div className="new__box">
				<img src={shoe7} alt="" className="new__img"/>

				<div className="new__link">
					<Link to="" className="button">VIEW PRODUCT</Link>
				</div>
			</div>

			<div className="new__box">
				<img src={shoe4} alt="" className="new__img"/>

				<div className="new__link">
					<Link to="" className="button">VIEW PRODUCT</Link>
				</div>
			</div>
		</div>
	</section>
    </div>
  );
}

export default Products3;
