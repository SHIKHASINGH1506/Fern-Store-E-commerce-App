import '../Navbar/navbar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useAuth, useProduct } from "../../contexts/index";
import { getTotalItemInCart } from "../../utils/cart/cart";

const Navbar = () => {
    const navigate = useNavigate();
    const {state: {cart, wishlist}, dispatch} = useProduct();
    const { totalItem } = getTotalItemInCart(cart);
    const { auth: {token, isAuth}, setAuth } = useAuth();

    const logoutUser = () =>{
        dispatch({
            type:"LOGOUT"
        });
        setAuth({
            token:'',
            user:{},
            isAuth: false
        });
        localStorage.clear();
        navigate('/');
    }

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
                    >
                        <rect width="60" height="10"></rect>
                        <rect y="20" width="60" height="10"></rect>
                        <rect y="40" width="60" height="10"></rect>
                    </svg>
                    <a className="brand-logo" href="#">FERN</a>

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
                                    {cart.length>0 && <span class="btn-badge d-flex justify-center items-center">{totalItem}</span>}
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
                                    {wishlist.length> 0 && <span class="btn-badge d-flex justify-center items-center">{wishlist.length}</span>}
                                </span>
                            </div>
                        </li>
                       {!isAuth && <li className="nav-item">
                            <Link to='/Login' className='nav-item-link'>LOGIN</Link>
                        </li>}
                        {isAuth && <li className="nav-item">
                            <div onClick={() => logoutUser()} className='nav-item-link'>LOGOUT</div>
                        </li>
                        }
                    </ul>
                </div>
                <div className="sidebar-wrapper" id="sidebar-wrapper">
                    <div className="sidebar" id="sidebar">
                        <ul className="sidebar-list sidebar-collapse">
                            <li className="sidebar-item hide">
                                <a className="sidebar-item-link profile-icon" href="#"><i className="fas fa-user"></i></a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-item-link" href="#">Home</a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-item-link" href="./Components/Products/product.html">Product</a>
                            </li>
                            <li className="sidebar-item hide">
                                <a className="sidebar-item-link" href="#">Order</a>
                            </li>
                            <li className="sidebar-item hide">
                                <a className="sidebar-item-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export { Navbar };