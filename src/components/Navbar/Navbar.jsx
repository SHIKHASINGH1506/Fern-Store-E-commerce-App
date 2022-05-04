import '../Navbar/navbar.css';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useAuth, useProduct, useSlider } from "contexts/index";
import { getTotalItemInCart } from "utils/cart/cart";
import { logo } from "assets/index";

const Navbar = () => {
    const navigate = useNavigate();
    const { state: { cart, wishlist }, dispatch } = useProduct();
    const { totalItem } = getTotalItemInCart(cart);
    const { auth: { token, isAuth }, setAuth } = useAuth();
    const { slider, setSlider } = useSlider();
    const [showProfileModal, setProfileModal] = useState();

    const logoutUser = () => {
        dispatch({
            type: "LOGOUT"
        });
        setAuth({
            token: '',
            user: {},
            isAuth: false
        });
        localStorage.clear();
        navigate('/');
    }
    const sliderHandler = () => {
        setSlider(currentSliderState => !currentSliderState);
    }
    let totalWishlistItems = isAuth ? wishlist.length : 0;
    let totalCartItems = isAuth ? cart.length : 0;

    return (
        <header className="navbar-home">
            <nav className="navbar-wrapper">
                <div className="navbar-left-aligned">
                    <svg
                        className="sidebar-toggler"
                        id="sidebar-toggler"
                        viewBox="0 0 100 40"
                        width="40"
                        height="40"
                        onClick={() => sliderHandler()}
                    >
                        <rect width="60" height="10"></rect>
                        <rect y="20" width="60" height="10"></rect>
                        <rect y="40" width="60" height="10"></rect>
                    </svg>
                    <div className="logo-wrapper"><img src={logo} className="responsive-img" /></div>
                    <Link className="brand-logo mx-2" to="/">FERN</Link>



                    <ul className="navbar-nav navbar-nav-collapse">
                        <li className="nav-item">
                            <Link to='/' className='nav-item-link'>HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Products' className='nav-item-link'>PRODUCT</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right-aligned">
                    <div className="search-bar">
                        <button className="search-bar__btn" type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                        <input
                            className="search-bar-input"
                            type="text"
                            id="product"
                            placeholder="Search item here"
                        />
                    </div>
                    <ul className="navbar-nav navbar-fixed">
                        <li className="nav-item">
                            <div className="nav-icon-link no-link-style">
                                <span className="nav-icon badge-container"
                                    onClick={() => token
                                        ? navigate('/Cart')
                                        : navigate('Login')}
                                >
                                    <i className="fas fa-shopping-bag"></i>
                                    {totalCartItems > 0 && <span class="btn-badge d-flex justify-center items-center">{totalItem}</span>}
                                </span>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-icon-link no-link-style">
                                <span className="nav-icon badge-container"
                                    onClick={() => token
                                        ? navigate('/Wishlist')
                                        : navigate('Login')}
                                >
                                    <i className="fas fa-heart"></i>
                                    {totalWishlistItems > 0 && <span class="btn-badge d-flex justify-center items-center">{wishlist.length}</span>}
                                </span>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div
                                className="nav-icon-link no-link-style"
                                onClick={() => setProfileModal(prevState => !prevState)}><i className=" nav-icon fas fa-user-circle"></i></div>
                        </li>

                        <div className={`details-overlay ${showProfileModal ? 'open' : ''}`}>

                        </div>
                        <div className={`profile-option ${showProfileModal ? 'show' : ''}`}>
                            <ul>
                                <li className="profile-item">
                                    <div className="icon-wrapper"><i class="fas fa-box-open"></i></div>
                                    Orders
                                </li>
                                <Link to='/address' className="profile-item">
                                    <div className="icon-wrapper"><i class="fas fa-map-marker-alt"></i></div>
                                    Address
                                </Link>
                                <li className="profile-item">
                                    <div className="icon-wrapper"><i class="fas fa-edit"></i></div>
                                    Profile Details
                                </li>
                                <li className="profile-item" onClick={() => logoutUser()}>
                                    <i class="fas fa-logout"></i>Sign Out</li>
                            </ul>
                        </div>

                        {/* {!isAuth && <li className="nav-item">
                            <Link to='/Login' className='nav-item-link'>LOGIN</Link>
                        </li>}
                        {isAuth && <li className="nav-item">
                            <button onClick={() => logoutUser()} className='transparent-btn nav-item-link'>LOGOUT</button>
                        </li>
                        } */}
                    </ul>
                </div>
                <div className={`sidebar-wrapper ${slider ? 'show' : ''}`} id="sidebar-wrapper">
                    <div className={`sidebar ${slider ? 'view' : ''}`} id="sidebar">
                        <ul className="sidebar-list sidebar-collapse">
                            <li className="sidebar-item hide">
                                <Link className="sidebar-item-link profile-icon" to="#"><i className="fas fa-user"></i></Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-item-link" to="/">Home</Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-item-link" to="/Products">Product</Link>
                            </li>
                            <li className="sidebar-item hide">
                                <Link className="sidebar-item-link" to="/Cart">View Cart</Link>
                            </li>
                            <li className="sidebar-item hide">
                                <Link className="sidebar-item-link" to="#">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export { Navbar };