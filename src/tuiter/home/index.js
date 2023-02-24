import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import PostList from "../post-list";

const HomeComponent = () => {
    return(
        <>
            {PostList()}
        </>
    );
};
export default HomeComponent;