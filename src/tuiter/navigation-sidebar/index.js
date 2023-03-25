import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import * as Icon from 'react-bootstrap-icons';

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group ms-2">
            <a className="list-group-item">Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item 
                    ${active === 'home'?'active':''}`}>
                <Icon.HouseDoorFill/>
                <span class="d-none d-xl-inline"> Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item 
                    ${active === 'explore'?'active':''}`}>
                <Icon.Hash/>
                <span class="d-none d-xl-inline"> Explore</span>
            </Link>
            <Link to="/" className="list-group-item">
                <Icon.Asterisk/>
                <span class="d-none d-xl-inline"> Labs</span>
            </Link>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <Icon.Bell/>
                <span class="d-none d-xl-inline"> Notifications</span>
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <Icon.Envelope/>
                <span class="d-none d-xl-inline"> Messages</span>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <Icon.Bookmark/>
                <span class="d-none d-xl-inline"> Bookmarks</span>
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <Icon.List/>
                <span class="d-none d-xl-inline"> Lists</span>
            </a>
            <Link to="/tuiter/profile" className={`list-group-item 
                    ${active === 'profile'?'active':''}`}>
                <Icon.Person/>
                <span class="d-none d-xl-inline"> Profile</span>
            </Link>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <Icon.ThreeDots/>
                <span class="d-none d-xl-inline"> More</span>
            </a>
        </div>
    );
};
export default NavigationSidebar;