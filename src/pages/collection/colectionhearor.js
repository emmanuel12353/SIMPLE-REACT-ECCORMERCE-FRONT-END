import React from 'react';
import { Link } from 'react-router-dom';

const Collectionheroe = () => {
	return (
	<div>
	<section className="offer">
		<div className="offer__bg">
			<div className="offer__data">
				<h2 className="offer__title">Special Offer</h2>
				<p className="offer__description">Special offerts discounts for women this week only</p>
				<Link to='/Collection' className="button">SHOP NOW</Link>
			</div>
		</div>
	</section>
	</div>
);
	}
	

export default Collectionheroe;