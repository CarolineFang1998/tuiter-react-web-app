import React from "react";
import {useSelector} from "react-redux";
import * as Icon from 'react-bootstrap-icons';

const ProfileDisplay = () => {
    const profile = useSelector((state) => state.profile);
    console.log(profile);
    return(
        <div>
            <div className="row">
                <div className="col-2 mt-3">
                    <Icon.ArrowLeft className="fa-lg"></Icon.ArrowLeft>
                </div>
                <div className="col-10">
                    <div className="wd-name">{profile.name}</div>
                    <div className="wd-handle">6,114 Tweets</div>
                </div>
            </div>

            <img className="wd-banner" src={profile.bannerPicture} />
            <div className="row">
                <div className="col-9">
                    <img className="wd-avatar" src={profile.profilePicture} />
                </div>
                <div className="col-3">
                    <a href="edit-profile">
                        <button className="wd-button-edit">Edit profile</button>
                    </a>
                </div>
            </div>

            <div className="ms-2 me-2">
                <div className="wd-name">{profile.name}</div>
                <div className="wd-handle">{profile.handle}</div><br/>
                <div>{profile.bio}</div><br/>
                <div>
                    <span className="wd-handle"><Icon.GeoAlt/> {profile.location} </span>
                    <span className="wd-handle"> <Icon.Balloon/> Born {profile.dateOfBirth} </span>
                    <span className="wd-handle"> <Icon.Calendar3/> Joined {profile.dateJoined}</span>
                </div>
                <br/>
                <div>
                    <span>{profile.followingCount}  </span> <span className="wd-handle"> Following &nbsp;</span>
                    <span> {profile.followersCount}</span> <span className="wd-handle"> Followers </span>
                </div>
            </div>
        </div>
    );
};
export default ProfileDisplay;