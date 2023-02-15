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
                    <a href="explore-settings.html" class="wd-search-gear">
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
           <div class="position-relative pt-1 ">
            <div class="wd-image-text position-relative wd-border-bottom">
              <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" class="wd-content-img">
              <div>
                <span class="d-block d-sm-none wd-content-text-xs">SpaceX's Starship</span>
                <span class="d-none d-sm-block d-md-none wd-content-text-sm">SpaceX's Starship</span>
                <span class="d-none d-md-block d-lg-none wd-content-text-md">SpaceX's Starship</span>
                <span class="d-none d-lg-block d-xl-none wd-content-text-lg">SpaceX's Starship</span>
                <span class="d-none d-xl-block d-xxl-none wd-content-text-xl">SpaceX's Starship</span>
                <span class="d-none d-xxl-block wd-content-text-xxl">SpaceX's Starship</span>
              </div>
            </div>
          </div>
           
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
