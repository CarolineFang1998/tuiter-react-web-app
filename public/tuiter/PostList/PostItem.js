const PostItem = (post) => {
    return(`
    <!--    Post Section-->
    <div class="row wd-solid-white-border-topic">
    
        <div class="col-1">
            <img class="wd-avatar-image" src="${post.avatar}">
        </div>
        
        <!--        text -->
        <div class="col-11">
            <div class = "wd-bookmark-post-shift " >
        <!--            C Name and handle-->
    
                <span class="wd-bookmark-author">${post.userName}</span>
                <i class="fa-solid fa-circle-check wd-bookmark-icon-grey"></i>
                <span class="wd-bookmark-handle">${post.handle}</span>
                 · 
                <span class="wd-bookmark-handle">${post.time}</span><br/>
    <!--                D main content-->
                <div class="wd-bookmark-content">${post.title}</div>
        
        <!--            image-->
                <img class="wd-bookmark-image wd-rounded-corners-top" src="${post.image}" >
    
        <!--            text below image-->
                <div class = "wd-bookmark-text wd-rounded-corners-bottom">
                    <div class = "wd-bookmark-text-title">${post.topic}</div>
                    <div class = "wd-bookmark-text-content">${post.text}</div>
                    <div class = "wd-bookmark-text-content ">${post.link}</div>
                </div>
    
        <!--            icons-->
                <div class = "wd-icons">
                    <div class = "wd-grid-col-left_twenty_five">
                        <a href="#">
                            <i class="fa-sharp fa-regular fa-comment wd-bookmark-icon-grey"></i>
                            <span class="wd-bookmark-text-content wd-bookmark-icon-space">
                             ${post.reply}</span>
                        </a>
                    </div>
                    <div class = "wd-grid-col-left_twenty_five">
                        <a href="#">
                            <i class="fa-solid fa-retweet wd-bookmark-icon-grey"></i>
                            <span class="wd-bookmark-text-content wd-bookmark-icon-space">
                             ${post.retweet}</span>
                        </a>
                    </div>
                    <div class = "wd-grid-col-left_twenty_five">
                        <a href="#">
                            <i class="fa-regular fa-heart wd-bookmark-icon-grey"></i>
                            <span class="wd-bookmark-text-content wd-bookmark-icon-space ">
                            ${post.like}</span>
                        </a>
                    </div>
                    <div class = "wd-grid-col-left_twenty_five">
                        <a href="#">
                            <i class="fa-solid fa-arrow-up-from-bracket wd-bookmark-icon-grey"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    

 `);

}
export default PostItem;