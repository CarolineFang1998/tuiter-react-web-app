import React, { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="wd-icons">
                <div className="wd-grid-col-left_twenty">
                    <a href="">
                        <Icon.ChatRight className="wd-bookmark-icon-black"/>
                        <span
                            className="wd-bookmark-text-content-black wd-bookmark-icon-space">
                                 {post.replies}</span>
                    </a>
                </div>
                <div className="wd-grid-col-left_twenty">
                    <a href="">
                        <Icon.Repeat className="wd-bookmark-icon-black"/>
                        <span
                            className="wd-bookmark-text-content-black wd-bookmark-icon-space">
                                 {post.retuits}</span>
                    </a>
                </div>
                <div className="wd-grid-col-left_twenty">
                    <span >
                        {post.liked ?
                         <Icon.HeartFill className="wd-bookmark-icon-red"
                                         onClick={() => dispatch(updateTuitThunk({
                                                                             ...post,
                                                                             likes: post.likes - 1,
                                                                             liked: false
                                                                         }))}/> :
                         <Icon.Heart className="wd-bookmark-icon-black"
                                     onClick={() => dispatch(updateTuitThunk({
                                                                                 ...post,
                                                                                 likes: post.likes + 1,
                                                                                 liked: true
                                                                             }))}/>}
                        <span
                            className="wd-bookmark-text-content-black wd-bookmark-icon-space ">{post.likes}</span>
                    </span>
                </div>
                <div className="wd-grid-col-left_twenty">
                    <span >
                        {post.disliked ?
                         <Icon.HandThumbsDownFill className="wd-bookmark-icon-black"
                                         onClick={() => dispatch(updateTuitThunk({
                                                                                     ...post,
                                                                                     dislikes: post.dislikes - 1,
                                                                                     disliked: false
                                                                                 }))}/> :
                         <Icon.HandThumbsDown className="wd-bookmark-icon-black"
                                     onClick={() => dispatch(updateTuitThunk({
                                                                                 ...post,
                                                                                 dislikes: post.dislikes + 1,
                                                                                 disliked: true
                                                                             }))}/>}
                        <span
                            className="wd-bookmark-text-content-black wd-bookmark-icon-space ">{post.dislikes}</span>
                    </span>
                </div>
                <div className="wd-grid-col-left_twenty">
                    <a href="">
                        <Icon.BoxArrowUp className="wd-bookmark-icon-black"/>
                    </a>
                </div>
            </div>
        </>
    );
};
export default TuitStats;
