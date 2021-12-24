import React from 'react';
import './styles.css';

const Header = ({black})=>{
    return(
        <header className={black ? "black" : ''}>
            <div className="header--logo">
                <a href="../../../index.html" className="logo">NETFLIX</a>
            </div>
            <div className="header--user">
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="user-profile" />
            </div>
        </header>
    )
}

export default Header;
