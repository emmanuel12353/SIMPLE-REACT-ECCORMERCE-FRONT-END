import React from 'react';
import Header from './pages/component/header/header';
import hearor from '../src/pages/heroesection/hearor';
import Aboutuspage from '../src/pages/aboutus/aboutuspage';
import Login from '../src/pages/login/signin';
import Cart from './pages/cart/cart';
import Collection from './pages/collection/colection';
import Updates from '../src/pages/component/updates/udates'
import Footer from '../src/pages/component/footer/footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
	render () {
  return (
	<Router>
    <div className="App">
	 <Header />
	 <Switch>
	  <Route exact path="/" component={hearor} />
	  <Route exact path="/home" component={hearor} />
	  <Route exact path="/aboutus" component={Aboutuspage} />
	   <Route exact path="/login" component={Login} />
	   <Route exact path="/cart" component={Cart} />
	   <Route exact path="/Collection" component={Collection} />
	 </Switch>
	 <Updates />
	 <Footer />
    </div>
	</Router>
  );
}
}
export default App;
