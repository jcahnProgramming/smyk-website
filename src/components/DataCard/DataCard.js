import React from 'react';

import './DataCard.css';

const DataCard = (props) => {

    let handlerData = props.HandlerType;

    function HandlerType() {
        switch(props.HandlerType) {
            case 'newsHandler':
                NewsPageHandler();
                break;
            case 'applyTeamHandler':
                ApplyTeamHandler();
                break;
            case 'applyOfficerHandler':
                console.log("made it to applyofficerhandler");
                ApplyOfficerHandler();
                return ApplyOfficerHandler();
            default: handlerData = null;
        }
    };

    function NewsPageHandler() {
        //add functionality here to move to team page on {prop.teamPageLink}
    };

    function ApplyTeamHandler() {
        //add functionality here to move to team page on {prop.teamPageLink}
    };

    const ApplyOfficerHandler = () => {
        window.open("https://forms.gle/gBABvdQtQHxoFr3a9");
    };

  return (
    <div className='card__base'>
        <img src={props.img} />
        <div className='card__title'>
            <h3>{props.title}</h3>
        </div>
        <div className='card__text'>
            {props.text}
        </div>
        <div className='card__button'>
            <button className='button' onClick={HandlerType}>{props.buttonText}</button>
        </div>
    </div>
  )
}

export default DataCard