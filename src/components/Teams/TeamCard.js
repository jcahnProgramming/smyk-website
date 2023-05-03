import React, { useState } from 'react';

import "./TeamCard.css";

const TeamCard = (props) => {

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
                <button className='button' onClick={SeeTeamPageButtonHandler}>See Team Page</button>
            </div>
        </div>
    );
}
export default TeamCard;