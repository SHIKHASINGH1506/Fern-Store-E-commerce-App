import { Link } from 'react-router-dom';
import '../Navbar/navbar.css';

const Navbar = () => {
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
                            <Link to='/Login' className='nav-item-link'>LOGIN</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Cart' className='nav-item-link'>
                                <span className="nav-icon">
                                    <i className="fas fa-shopping-bag"></i>
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            {/* <a
                                className="nav-icon-link no-link-style"
                                href="./Components/Wishlist/wishlist.html"
                            > */}
                            <Link to='/Wishlist' className='nav-item-link'>
                                <span className="nav-icon">
                                    <i className="fas fa-heart"></i>
                                </span>
                            </Link>
                            {/* </a> */}
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-icon-link no-link-style"
                                href="#">
                                LOGOUT
                            </a>
                        </li>
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

export {Navbar};