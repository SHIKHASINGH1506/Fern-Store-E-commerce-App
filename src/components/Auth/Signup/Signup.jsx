import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from '../../../services/index';
import { useAuth } from '../../../contexts/index';

const Signup = () => {
  const initialSignupFields = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [signupFields, setSignupFields] = useState(initialSignupFields);
  const navigate = useNavigate();
  const {setAuth} = useAuth();

  const fieldChangeHandler = (e) => {
    const {name, value} = e.target;
    setSignupFields({
      ...signupFields,
      [name]: value
    });
  }

  const signupFormHandler = async (e, signupFields) =>{
    e.preventDefault();
    try{
      const isSignup = await signupUser(signupFields);

      if(isSignup){
        const {createdUser, encodedToken} = isSignup;
        setAuth({
          token: encodedToken,
          user: createdUser,
          isAuth: true
        });
        localStorage.setItem("token", JSON.stringify(encodedToken));
        localStorage.setItem("user", JSON.stringify(createdUser));
        setTimeout(() => {
          setSignupFields(initialSignupFields);
          navigate('/Login');
        }, 1000)

      }
    }catch(error){
      console.log(error.message);
    }
  }

  return (
    <div className="login-wrapper">
      <div className="breadcrumb">

      </div>
      <div className="login-modal">
        <form className="login-form" onSubmit={(e) => signupFormHandler(e, signupFields)}>
          <h3 className="login-title">Sign up</h3>
          <p className="login-subtitle text-center">Enter email and password</p>
          <div className="input-container">
            <label className="input-label" for="fullName">Full Name</label>
            <input
              className="input-section"
              type="text"
              id="fullName"
              name="fullName"
              value={signupFields.fullName}
              placeholder="Full Name"
              onChange={(e) => fieldChangeHandler(e)}
            />
          </div>
          <div className="input-container">
            <label className="input-label" for="email">Email</label>
            <input
              className="input-section"
              type="text"
              id="email"
              name="email"
              value={signupFields.email}
              placeholder="Email"
              onChange={(e) => fieldChangeHandler(e)}
            />
          </div>
          <div className="input-container">
            <label className="input-label" for="pwd">Password</label>
            <input
              className="input-section"
              type="password"
              id="pwd"
              name="password"
              value={signupFields.password}
              placeholder="Password"
              onChange={(e) => fieldChangeHandler(e)}
              required
            />
          </div>
          <div className="input-container">
            <label className="input-label" for="confirm-pwd">Confirm Password</label>
            <input
              className="input-section"
              type="password"
              name="confirmPassword"
              value={signupFields.confirmPassword}
              id="confirm-pwd"
              placeholder="Confirm Password"
              onChange={(e) => fieldChangeHandler(e)}
              required
            />
          </div>
          <label className="input-label text-sm" for="pwd-store">
            <input type="checkbox" name="" id="pwd-store" />
            I accept all the terms and conditions
          </label>

          <button className="bttn bttn-primary bttn-block">CREATE ACCOUNT</button>
          <p className="sub-text text-sm text-center">Already have an account?
            <Link className="text-sm bold link-text-primary" to='/Login'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export { Signup };