import React, { useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import { updateProfile } from "./profile-reducer";

const EditProfile = () => {
    const profile = useSelector((state) => state.profile);
    console.log(profile);

    let [name, setName] = useState(profile.name);
    let [bio, setBio] = useState(profile.bio);
    let [website, setWebsite] = useState(profile.website);
    let [location, setLocation] = useState(profile.location);
    let [dob, setDob] = useState(profile.dateOfBirth);

    const dispatch = useDispatch();

    const handleSaveButton = () => {
        dispatch(updateProfile({
                                   ...profile,
                                   name:name,
                                   bio:bio,
                                   location:location,
                                   website:website,
                                   dateOfBirth:dob,
                               }));

    };

    return(
        <>
            <div className="row mt-2 ">
                <div className="col-1 flex">
                    <Link to="/tuiter/profile" >
                        <Icon.XLg className="wd-icon-black mt-3"></Icon.XLg>
                    </Link>
                </div>
                <div className="col-9 align-self-center">
                    <h5 className="mb-0 wd-name">Edit profile</h5>
                </div>

                <div className="col-2 align-self-center">
                    <Link to="/tuiter/profile">
                        <button onClick={handleSaveButton}
                            className="wd-button-save">Save</button>
                    </Link>
                </div>
            </div>

            <img className="wd-banner" src={profile.bannerPicture} />
            <div>
                    <img className="wd-avatar" src={profile.profilePicture} />
            </div>

            <form className="mb-2">
                <div className="form-group my-2 wd-border">
                    <label htmlFor="name" className="form-label ms-2">Name</label><br/>
                    <input
                        type="text"
                        className="ms-2"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="form-group my-2 wd-border">
                    <label for="bio" className="form-label ms-2">Bio</label><br/>
                    <textarea
                        className="ms-2"
                        rows="4"
                        id="bio"

                        value={bio}
                        onChange={e => setBio(e.target.value)}
                    />
                </div>
                <div className="form-group my-2 wd-border">
                    <label for="location" className="form-label ms-2">Location</label><br/>
                    <input
                        className="ms-2"
                        id = "location"
                        type="text"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                    />
                </div>
                <div className="form-group my-2 wd-border">
                    <label for="website" className="form-label ms-2">Website</label><br/>
                    <input
                        className="ms-2"
                        id = "website"
                        type="text"
                        value={website}
                        onChange={e => setWebsite(e.target.value)}
                    />
                </div>
                <div className="form-group wd-border">
                    <label for="dob" className="form-label ms-2">Date of birth</label><br/>
                    <input
                        className="ms-2"
                        id = "dob"
                        type="text"
                        value={dob}
                        onChange={e => setDob(e.target.value)}
                    />
                </div>
            </form>

        </>
    );
};
export default EditProfile;

