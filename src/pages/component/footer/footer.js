import React from "react";
import { Link } from 'react-router-dom';
import footerstore1 from './img/footerstore1.png';
import footerstore2 from './img/footerstore2.png';


const Footer = () => {
	return (
  <div>
    <div className="footer section">
		<div className="footer__container bd-grid">
			<div className="footer__box">
				<h3 className="footer__title">PHILLOU</h3>
				<p className="footer__deal">Products store</p>
				<Link to="/" className="nav__link"><img src={footerstore1} alt="" className="footer__store"/></Link>
				<Link to="/home" className="nav__link"><img src={footerstore2}  alt="" className="footer__store"/></Link>
			</div>

			<div className="footer__box">
				<h3 className="footer__title">EXPLORE</h3>
				<ul>
				<li className="nav__item"><Link to="/home" className="nav__link active">Home</Link></li>
					<li className="nav__item"><Link to="/home" className="footer__link">collection</Link></li>
					<li className="nav__item"><Link to="/aboutus" className="footer__link">aboutus</Link></li>
					<li className="nav__item"><Link to="/home" className="footer__link">contactus</Link></li>
					<li className="nav__item"><Link to="/Login" className="footer__link">login</Link></li>
					<li className="nav__item"><Link to="/home" className="footer__link">signup</Link></li>
					<li className="nav__item"><Link to="/home" className="footer__link">cart</Link></li>
				</ul>
			</div>

			<div className="footer__box">
				<h3 className="footer__title">OUR SERVICES</h3>
				<ul>
					<li><Link to="/" className="footer__link">Pricing</Link></li>
					<li><Link to="/" className="footer__link">Free Shipping</Link></li>
					<li><Link to="/" className="footer__link">Gift Cards</Link></li>
				</ul>
			</div>

			<div className="footer__box">
				<h3 className="footer__title">FOLLOW</h3>
				<Link to="/" className="footer__social"><i className="bx bxl-facebook-square"></i></Link>
				<Link to="/" className="footer__social"><i className="bx bxl-instagram-alt"></i></Link>
				<Link to="/" className="footer__social"><i className="bx bxl-twitter"></i></Link>
				<Link to="/" className="footer__social"><i className='bx bxl-pinterest-alt'></i></Link>
				
			</div>
		</div>
	</div>
  </div>
);
}
export default Footer;






