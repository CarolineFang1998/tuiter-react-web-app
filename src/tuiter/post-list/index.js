import postsArray from './posts.json';
import PostItem from "./post-item.js";

const PostList = () => {
    return(
        <ul className="list-group">
          {
               postsArray.map(post =>
                      <PostItem post = {post}/>)
          }
      </ul>
  );
};
export default PostList;