import React from "react";
import * as Icon from 'react-bootstrap-icons';

const PostItem = (
    {
        post = {
            "isRetweet": true,
            "avatar": "../images/elonmask_avatar.jpeg",
            "userName": "Elon Musk",
            "handle": "@elonmusk",
            "time": "23h",
            "title": "Amazing show about @Inspiration4x mission!",
            "image": "../images/countdown.jpeg",
            "topic": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "text": "From training to launch to landing, this all-access docuseries rides along with the Inspration4 crew on the first all-civilian orbital space...",
            "link": "netflix.com",
            "reply":"4.2k",
            "retweet":"3.5k",
            "like":"37.5k"
        }

    }
) => {
    return(
    <li className="list-group-item">
        <div className="row ">

            <div className="col-1">
                <img className="wd-avatar-image" src={post.avatar}/>
            </div>


            <div className="col-11">
                <div className = "wd-bookmark-post-shift " >

                    <span classNam="wd-bookmark-author">{post.userName} </span>
                    <Icon.CheckCircleFill className="wd-bookmark-icon-blue"/>
                    <span className="wd-bookmark-handle"> {post.handle} </span>
                     · 
                    <span className="wd-bookmark-handle"> {post.time}</span><br/>

                    <div className="wd-bookmark-content">{post.title}</div>

                    <img className="wd-bookmark-image wd-rounded-corners-top" src={post.image} />

                    <div className = "wd-bookmark-text wd-rounded-corners-bottom">
                        <div className = "wd-bookmark-text-title">{post.topic}</div>
                        <div className = "wd-bookmark-text-content">{post.text}</div>
                        <div className = "wd-bookmark-text-content">
                            {post.link!=""?<Icon.Link45deg className="wd-bookmark-icon-black"/>:""}
                            {post.link}</div>
                    </div>

                    <div className = "wd-icons">
                        <div className = "wd-grid-col-left_twenty_five">
                            <a href="#">
                                <Icon.ChatRight className="wd-bookmark-icon-grey"/>
                                <span className="wd-bookmark-text-content-grey wd-bookmark-icon-space">
                                 {post.reply}</span>
                            </a>
                        </div>
                        <div className = "wd-grid-col-left_twenty_five">
                            <a href="#">
                                <Icon.Repeat className="wd-bookmark-icon-grey"/>
                                <span className="wd-bookmark-text-content-grey wd-bookmark-icon-space">
                                 {post.retweet}</span>
                            </a>
                        </div>
                        <div className = "wd-grid-col-left_twenty_five">
                            <a href="#">
                                <Icon.Heart className="wd-bookmark-icon-grey"/>
                                <span className="wd-bookmark-text-content-grey wd-bookmark-icon-space ">
                                {post.like}</span>
                            </a>
                        </div>
                        <div className = "wd-grid-col-left_twenty_five">
                            <a href="#">
                                <Icon.BoxArrowUp className="wd-bookmark-icon-grey"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
     </li>

 );

};
export default PostItem;