import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { listProductsAction } from "../actions/product_actions";
import '../form_style.css';
import '../product-details.css';
import { signinAction } from "../actions/user_actions";

function SigninScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const dispatch = useDispatch();

  const {loading, userInfo, error} = userSignin;

  useEffect(() => {
    if(userInfo) {
      props.history.push("/");
    }
    return () => {

    };
  }, [userInfo])

  const submitHandler =(e) => {
    // e.preventDefault();
    dispatch(signinAction(email, password));
  }

  return <div className="form">
    <form onSubmit={submitHandler}>
      <ul className="form-container">
        <li>
          <h3>Sign In</h3>
        </li>

        <li>
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
        </li>

        <li>
          <label for="password">Password:</label>
          <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
        </li>

        <li>
          <button type="submit" className="button primary">Signin</button>
        </li>

        <li>
          New to Prototype?
          <Link to="/register" className="button secondary text-center">
            Create a new Account
          </Link>
        </li>
      </ul>
    </form>
  </div>

}

export default SigninScreen;