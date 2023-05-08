import React from 'react';

import { Link } from "react-router-dom";

import './LoginChip.css';

const LoginChip = (props) => {
    function ChipHandler() {
        <Link to="/useraccount" />
    };

  return (
    <div className='chip' onClick={ChipHandler}>
        <div>
            <img className='chip__img' src={require('../../img/logo.png')} />
        </div>
        <div className='chip__text'>
            {props.username}
        </div>
    </div>
  )
}

export default LoginChip