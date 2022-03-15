import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="login-wrapper">
            <div className="breadcrumb">

            </div>
            <div className="login-modal">
                <form action="" className="login-form">
                    <h3 className="login-title">Sign up</h3>
                    <p className="login-subtitle text-center">Enter email and password</p>
                    <div className="input-container">
                        <label className="input-label" for="first-name">First Name</label>
                        <input
                            className="input-section"
                            type="text"
                            id="first-name"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-label" for="email">Email</label>
                        <input
                            className="input-section"
                            type="text"
                            id="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-label" for="pwd">Password</label>
                        <input
                            className="input-section"
                            type="password"
                            id="pwd"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-label" for="confirm-pwd">Confirm Password</label>
                        <input
                            className="input-section"
                            type="password"
                            id="confirm-pwd"
                            placeholder="Confirm Password"
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