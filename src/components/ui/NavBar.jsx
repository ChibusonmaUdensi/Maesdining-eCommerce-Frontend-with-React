import { Link } from 'react-router-dom'; 
import { GiShoppingCart } from "react-icons/gi"; 
import NavBarLink from './NavBarLink';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        
        <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 ${styles.stickyNavbar}`}>
            <div className="container">
                <Link className="navbar-brand fw-bold text-uppercase" to="/">MAES DINING</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarContent" 
                    aria-controls="navbarContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <NavBarLink /> {/* Render your navigation links here */}
                    <Link to="/cart" className={`btn btn-dark ms-3 rounded-pill position-relative ${styles.responsiveCart}`}>
                    <GiShoppingCart /> {/* Cart icon */}
                        <span 
                            className='position-absolute top-0 start-100 translate-middle badge rounded-pill'
                            style={{ backgroundColor: '#6050DC', fontSize: '0.85rem', padding: '0.5rem 0.65em' }}>
                            12 {/* Example cart item count */}
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
