import React, { useState } from 'react';

import "./TeamCard.css";

const TeamCard = (props) => {

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);


    function SeeTeamPageButtonHandler() {
        //add functionality here to move to team page on {prop.teamPageLink}
    };


    return (
        <div className='card__big'>
            <p className='teamname'>
                {props.title}
            </p>
            <hr className='rounded' />
            <div className='raidtimes'>
                <div className='raidtimes__text'>
                    <p>Raid Times:</p>
                    <p className=''>
                        {props.raidTimes}
                    </p>
                </div>
                <hr className='rounded'/>
                <p className='recruiting'>Recruiting Needs</p>
                <table className='table__classes'>
                    <tr>
                        <td className=''>
                        <img className='img__classes' src={require('./teamCardImg/warrior.png')} />
                        </td>
                        <td className='table__tabledata'>
                            Warrior
                        </td>
                        <td className=''>
                        <img className='img__classes' src={require('./teamCardImg/mage.png')} />
                        </td>
                        <td className='table__tabledata'>
                            Mage
                        </td>
                    </tr>
                    <tr>
                        <td className=''>
                        <img className='img__classes' src={require('./teamCardImg/druid.png')} />
                        </td>
                        <td className='table__tabledata'>
                            Druid
                        </td>
                        <td className=''>
                        <img className='img__classes' src={require('./teamCardImg/paladin.png')} />
                        </td>
                        <td className='table__tabledata'>
                            Paladin
                        </td>
                    </tr>
                    <tr>
                        <td className=''>
                        <img className='img__classes' src={require('./teamCardImg/hunter.png')} />
                        </td>
                        <td className='table__tabledata'>
                            Hunter
                        </td>
                        <td className=''>
                        <img className='img__classes' src={require('./teamCardImg/priest.png')} />
                        </td>
                        <td className='table__tabledata'>
                            Priest
                        </td>
                    </tr>
                    <tr>
                        <td className=''>
                        <img className='img__classes' src={require('./teamCardImg/rogue.png')} />
                        </td>
                        <td className='table__tabledata'>
                            Rogue
                        </td>
                        <td className=''>
                        <img className='img__classes' src={require('./teamCardImg/shaman.png')} />
                        </td>
                        <td className='table__tabledata'>
                            Shaman
                        </td>
                    </tr>
                    <tr>
                        <td className=''>
                        <img className='img__classes' src={require('./teamCardImg/warlock.png')} />
                        </td>
                        <td className='table__tabledata'>
                            Warlock
                        </td>
                        <td className=''>
                        <img className='img__classes' src={require('./teamCardImg/deathknight.png')} />
                        </td>
                        <td className='table__tabledata'>
                            Death Knight
                        </td>
                    </tr>
                </table>
                <div className='button__div'>
                    <button className='button' onClick={handleShow}>See Team Page</button>

                    {showModal && (
                        <div className='modal'>
                            <div className='modal-content'>
                                <span className='close' onClick={handleClose}>
                                &times;
                                </span>
                                    <div>
                                        
                                    </div>
                                <h2>{props.title}</h2>
                                <p>
                                    Modal Body Text Here
                                </p>
                                <button className='close-btn' onClick={handleClose}>
                                    Close
                                </button>
                            </div>
                        </div>
                    )}


                </div>
            </div>
        </div>
    );
}
export default TeamCard;