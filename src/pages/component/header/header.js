import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
	return (
  <div className="cont">
<header className="l-header">
		<nav className="nav bd-grid">
			<div>
				<Link tO="/home" className="nav__logo"><i className='bx bxs-chevrons-down'></i>PHILLOU<i classNames='bx bxs-chevrons-up'></i></Link>
			</div>

			<div className="nav__menu" id="nav-menu">
				<ul className="nav__list">
					<li className="nav__item"><Link to="/home" className="nav__link active">Home</Link></li>
					<li className="nav__item"><Link to="/Collection" className="nav__link">collection</Link></li>
					<li className="nav__item"><Link to="/aboutus" className="nav__link">aboutus</Link></li>
					<li className="nav__item"><Link to="/home" className="nav__link">contactus</Link></li>
					<li className="nav__item"><Link to="/Login" className="nav__link">login</Link></li>
					<li className="nav__item"><Link to="/Cart" className="nav__link">cart</Link></li>
				</ul>
			</div>

			<div>
				<i className='bx bx-cart nav__cart'></i>
				<i className='bx bx-menu nav__toggle' id="nav-toggle"></i>
			</div>
		</nav>
	</header>
</div>
);
	}
export default Header;






