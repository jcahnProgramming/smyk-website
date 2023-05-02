import React from 'react';
//import { Card, Grid, Text, Button, Row, Container } from "@nextui-org/react";

import "./TeamCard.css";

const TeamCard = (props) => {
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
                        <td>
                            <img src="./" />
                        </td>
                        <td>
                            Warrior
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
export default TeamCard;