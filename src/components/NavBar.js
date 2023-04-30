import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/joinus">Join Us</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/shop">Shop</Link>
            </li>

        </div>
    )
}

export default NavBar;