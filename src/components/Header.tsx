import React, {useContext} from 'react';
import {AuthContext} from "../firebase/AuthContext";
import {useNavigate, Outlet} from "react-router-dom";
import {logOut} from "../firebase/firebase";

const Layout: React.FC = () => {
    const user = useContext(AuthContext);
    const nav = useNavigate();
    return (
        <>
            <header className="header">
                <div className='logo'><img className='logo-img' alt='' src='imgs/green.png'/></div>
                <input id="menu-toggle" type="checkbox"/>
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                {user ?
                    <ul className="menu">
                        {user ?
                            <li>One</li>
                            :
                            <li>One</li>
                        }
                        <li>img</li>
                        <li onClick={() => {
                            logOut()
                        }}>Log Out
                        </li>
                    </ul>
                    :
                    <ul className="menu">
                        <li onClick={() => {
                            nav('/')
                        }}>Home
                        </li>
                        <li onClick={() => {
                            nav('/login')
                        }}>Log In
                        </li>
                        <li onClick={() => {
                            nav('/signup')
                        }}>Sign Up
                        </li>
                    </ul>}
            </header>
            <Outlet/>
        </>
    );
};

export default Header;
