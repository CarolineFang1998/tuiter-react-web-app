import React from "react";
import * as Icon from 'react-bootstrap-icons';
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "../tuit-stats/tuit-stats";

const TuitsItem = (
    {
        post = { "_id": 123, "topic": "Space", "userName": "SpaceX",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "time": "2h",   "image": "spacex.jpeg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row ">

                <div className="col-1">
                    <img className="wd-avatar-image" src={`/tuiter/images/${post.image}`}></img>
                </div>

                <div className="col-11">
                    <div className="wd-bookmark-post-shift ">
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(post._id)}></i>
                        <span classNam="wd-bookmark-author"><b>{post.username}</b> </span>
                        <Icon.CheckCircleFill className="wd-bookmark-icon-blue"/>
                        <span className="wd-bookmark-handle"> {post.handle} </span>
                        ·
                        <span className="wd-bookmark-handle"> {post.time}</span><br/>

                        <div className="">{post.tuit}</div>
                        <TuitStats post={post} />

                    </div>
                </div>



            </div>
        </li>

    );

};
export default TuitsItem;