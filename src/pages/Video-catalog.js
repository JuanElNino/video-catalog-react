import Catalog from "../services/API/Catalog"

export default function VideoCatalog() {
    return (
        <main>
            <div class="row mb-5 pb-4">
                <div class="col-12">
                    <video width="1422" height="800" controls autoplay>
                        <source src="assets/video/wheat-field.mp4" type="video/mp4" />
							Your browser does not support the video tag.
					</video>
                </div>
            </div>
            <div class="row mb-5 pb-5">
                <div class="col-xl-8 col-lg-7">
                    <div class="tm-video-description-box">
                        <h2 class="mb-5 tm-video-title">Mauris dapibus urna nec ipsum posuere</h2>
                        <p class="mb-4">Cras dictum pretium est, et imperdiet ex. Fusce vitae vestibulum ipsum. Maecenas ultricies ipsum a urna ullamcorper, id interdum est blandit. Vivamus sit amet justo sed erat iaculis consequat. Nulla suscipit posuere lectus ut venenatis. Proin sed orci eget tellus euismod vulputate eu eu arcu.</p>
                        <p class="mb-4">Etiam a bibendum lorem. Curabitur ac bibendum odio. Vivamus euismod dui mauris, ut tincidunt mi congue quis. Phasellus luctus orci dolor, a luctus massa tincidunt vitae. Integer sit amet odio id libero tincidunt dignissim in eget arcu.</p>
                        <p class="mb-4">Aliquam tristique ut magna sit amet tincidunt. Sed tempor tellus nulla, molestie luctus lectus tincidunt id. Cras euismod leo a urna placerat, vel blandit turpis fermentum.</p>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-5">
                    <div class="tm-bg-gray tm-share-box">
                        <h6 class="tm-share-box-title mb-4">Share this video</h6>
                        <div class="mb-5 d-flex">
                            <a href="" class="tm-bg-white tm-share-button"><i class="fab fa-facebook"></i></a>
                            <a href="" class="tm-bg-white tm-share-button"><i class="fab fa-twitter"></i></a>
                            <a href="" class="tm-bg-white tm-share-button"><i class="fab fa-pinterest"></i></a>
                            <a href="" class="tm-bg-white tm-share-button"><i class="far fa-envelope"></i></a>
                        </div>
                        <p class="mb-4">Author: <a href="https://templatemo.com" class="tm-text-link">TemplateMo</a></p>
                        <a href="#" class="tm-bg-white px-5 mb-4 d-inline-block tm-text-primary tm-likes-box tm-liked">
                            <i class="fas fa-heart mr-3 tm-liked-icon"></i>
                            <i class="far fa-heart mr-3 tm-not-liked-icon"></i>
                            <span id="tm-likes-count">486 likes</span>
                        </a>
                        <div>
                            <button class="btn btn-primary p-0 tm-btn-animate tm-btn-download tm-icon-download"><span>Download Video</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row pt-4 pb-5">
                <div class="col-12">
                    <h2 class="mb-5 tm-text-primary">Related Videos for You</h2>
                    <div class="row tm-catalog-item-list">
                        <Catalog />
                    </div>
                </div>
            </div>
        </main>

    );
}