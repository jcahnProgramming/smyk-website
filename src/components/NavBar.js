import { Link } from 'react-router-dom';

import LoginChip from './Chips/LoginChip';

import './NavBar.css';

const NavBar = () => {
    return (
        <div className='navbar__bar'>
            <div className='navbar__buttonlink'>
                <li className='navbar__menu__li'>
                    <Link className='navbar__text' to="/">Home</Link>
                </li>
            </div>
            <div className='navbar__buttonlink'>
                <li className='navbar__menu__li'>
                <Link className='navbar__text' to="/about">About</Link>
                </li>
            </div>
            <div className='navbar__buttonlink'>
                <li className='navbar__menu__li'>
                <Link className='navbar__text' to="/joinus">Join Us</Link>
                </li>
            </div>
            <div className='navbar__buttonlink'>
                <li className='navbar__menu__li'>
                <Link className='navbar__text' to="/contact">Contact</Link>
                </li>
            </div>
            <div className='navbar__buttonlink'>
                <li className='navbar__menu__li'>
                    <Link className='navbar__text' to="/shop">Shop</Link>
                </li>
            </div>

            <LoginChip className='far__right' username='SMYK Cat' />
        </div>
    )
}

export default NavBar;