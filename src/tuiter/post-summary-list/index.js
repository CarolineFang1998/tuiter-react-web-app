import React from "react";
import {useSelector} from "react-redux";
import PostSummaryItem
    from "./post-summary-item";
import who from "../data/who.json";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group me-2">
            {
                postsArray?.map(post =>
                                   <PostSummaryItem
                                       key={who._id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;