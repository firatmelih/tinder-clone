import React from 'react';
import './Header.css';
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import logo from './img/tinder.png' // relative path to image 

function Header() {
    return (
        <div className='header'>

            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />

            </IconButton>

            <img
                className='header__logo'
                src={logo}
                alt=""
            >
            </img>

            <IconButton>
                <QuestionAnswerIcon fontSize="large" className="header__icon" />
            </IconButton>

        </div >

    )
}

export default Header
