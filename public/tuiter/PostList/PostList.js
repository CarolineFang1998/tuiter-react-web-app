import posts from './post.js'
import PostItem from "./PostItem.js"
// wd-grid-content
const PostList = () => {
    return(`
        
      <div class="mb-2">

       ${posts.map(post=>{
        return(PostItem(post));
    }).join('')}
      </div>
  `);
}
export default PostList;