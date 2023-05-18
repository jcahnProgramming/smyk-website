import { useNavigate } from "react-router-dom";

import './LoginChip.css';

const LoginChip = (props) => {
    
    const navigate = useNavigate();

    function ChipHandler() {
        navigate('./useraccount');
    }


  return (
    <div className='chip' onClick={ChipHandler} style={{cursor: 'pointer'}}>
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