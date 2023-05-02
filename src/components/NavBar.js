import { Link } from 'react-router-dom';
import { Navbar } from "@nextui-org/react";

const NavBar = () => {
    return (
        <div className="navbar">
            <Navbar>
                <Navbar.Brand>
                    <Link to="/">Home</Link>
                </Navbar.Brand>
                <Navbar.Brand>
                    <Link to="/about">About</Link>
                </Navbar.Brand>
                <Navbar.Brand>
                <Link to="/joinus">Join Us</Link>
                </Navbar.Brand>
                <Navbar.Brand>
                <Link to="/contact">Contact</Link>
                </Navbar.Brand>
                <Navbar.Brand>
                <Link to="/shop">Shop</Link>
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default NavBar;