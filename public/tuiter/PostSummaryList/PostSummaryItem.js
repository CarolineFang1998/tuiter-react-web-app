const PostSummaryItem = (post) => {
    return(`
         <li class="list-group-item">
            <div class="row">
                <div class="col-9">
                    <div class="wd-color-grey">${post.topic}</div>
                    <div><b>${post.userName}</b>
                        <i class="fa-solid fa-circle-check"></i>
                        <span class="wd-color-grey"> - ${post.time}</span>
                    </div>
                    <div class="wd-post-text"><b>${post.title}</b></div>
                    <div class="wd-color-grey"> ${post.tweets!=''?post.tweets+' tweets':''} </div>
                
                </div>
                <div class="col-3">
                    <img width="60px" height="60px" class="mt-1 wd-post-image" src="${post.image}"/>
                </div>
                <div class="wd-float-done"></div>
            </div>
        </li>
    `);
}

export default PostSummaryItem;
