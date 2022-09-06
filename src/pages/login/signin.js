import React from 'react';
import signin from './signin.png';
//import Heroestop from '../component/hearortop/hearortop';
import './signin.css';
const Login = () => {
	return (
 <div className="text-center pt-9 mt-5">
		<main className="form-signin">
  <form>
    <img className="mb-4 mt-5" src={signin} alt="" width="1720" height="157" />
    <h1 className="h3 mb-3 fw-normal"> sign in</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
      <label for="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me" /> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
</main>
    </div>
	
);
	}

export default Login;
