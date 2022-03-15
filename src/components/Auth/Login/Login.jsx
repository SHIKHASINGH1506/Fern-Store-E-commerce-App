import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-wrapper">
            <div className="breadcrumb">

            </div>
            <div className="login-modal">
                <form action="" className="login-form">
                    <h3 className="login-title">Log in</h3>
                    <p className="login-subtitle text-center">Enter email and password</p>
                    <div className="input-container">
                        <label className="input-label" for="userName">Email</label>
                        <input
                            className="input-section"
                            type="text"
                            id="userName"
                            placeholder="Email"
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-label" for="pwd">Password</label>
                        <input
                            className="input-section"
                            type="password"
                            id="pwd"
                            placeholder="password"
                            required
                        />
                    </div>
                    <div className="login-help">
                        <div>
                            <label className="input-label text-sm" for="pwd-store">
                                <input type="checkbox" name="" id="pwd-store" />
                                    Remember me
                            </label>
                        </div>
                            <a href="#" className="text-sm">Forgot Password?</a>
                        </div>
                        <button className="bttn bttn-primary bttn-block">LOG IN</button>
                        <p className="sub-text text-sm text-center">Don't have an account? 
                        <Link className="text-sm bold link-text-primary" to='/Signup'>Signup</Link>
                        </p>
                 </form>
            </div>
        </div>
    )
}

export {Login};