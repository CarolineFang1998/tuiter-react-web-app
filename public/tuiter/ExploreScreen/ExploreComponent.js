import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <!-- search field and cog -->
                <!--                search bar-->
                <div class="position-relative wd-search-bar mb-2">
                    <i class="fa fa-search wd-search-image"></i>
                    <input id="search" class="wd-search-input wd-rounded-corners-all-around "
                           type="text" placeholder="Search Twitter">
                    <a href="explore-settings.html" id="search-input-icon" class="wd-search-gear">
                        <i class="fa fa-cog fa-2x"></i>
                    </a>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                  <!-- tabs -->
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">Sports</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link d-none d-md-block" href="#">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
           <!--                 huge image-->
                <div class="wd-huge-image">
                    <img src="image/Starship.webp" width="100%" height="350px">
                    <div class="wd-bottom-left">SpaceX's Starship</div>
                </div>
           
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
