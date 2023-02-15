const WhoToFollowListItem = (who) => {
    return(`
         <li class="list-group-item">
                <div class="wd-float-left-small">
                    <img class="wd-follow-logo" width="30px" height="30px"
                         src="${who.avatarIcon}"/>
                </div>
                <div class="wd-float-left-50">
                    <div><b>${who.userName}</b>
                        <i class="fa-solid fa-circle-check"></i></div>
                    <div>@${who.handle} </div>
                </div>
                <div class="wd-float-left-25">
                    <button class="wd-button-follow">Follow</button>
                </div>
            </li>
    `);
}

export default WhoToFollowListItem;