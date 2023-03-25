import React from "react";
import * as Icon from "react-bootstrap-icons";


const TuitStats = ({post}) => {
    return (
        <>
            <div className="wd-icons">
                <div className="wd-grid-col-left_twenty_five">
                    <a href="#">
                        <Icon.ChatRight className="wd-bookmark-icon-black"/>
                        <span
                            className="wd-bookmark-text-content-black wd-bookmark-icon-space">
                                 {post.replies}</span>
                    </a>
                </div>
                <div className="wd-grid-col-left_twenty_five">
                    <a href="#">
                        <Icon.Repeat className="wd-bookmark-icon-black"/>
                        <span
                            className="wd-bookmark-text-content-black wd-bookmark-icon-space">
                                 {post.retuits}</span>
                    </a>
                </div>
                <div className="wd-grid-col-left_twenty_five">
                    <a href="#">
                        {post.liked ? <Icon.HeartFill className="wd-bookmark-icon-red"/> :
                         <Icon.Heart className="wd-bookmark-icon-black"/>}
                        <span
                            className="wd-bookmark-text-content-black wd-bookmark-icon-space ">{post.likes}</span>
                    </a>
                </div>
                <div className="wd-grid-col-left_twenty_five">
                    <a href="#">
                        <Icon.BoxArrowUp className="wd-bookmark-icon-black"/>
                    </a>
                </div>
            </div>
        </>
    );
};
export default TuitStats;
