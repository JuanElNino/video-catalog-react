import ContactForm from "../components/ContactForm";
import { Provider } from "react-redux";
import store from "../store/store";
import showResults from "../components/showResults";
import Map from "../components/Map";

export default function Contact() {
  return (
    <main>
      <div class="container-fluid px-0">
        <div class="mx-auto tm-content-container">
          <div class="row mt-3 mb-5 pb-3">
            <div class="col-12">
              <div class="mx-auto tm-about-text-container px-3">
                <h2 class="tm-page-title mb-4 tm-text-primary">Contact our team</h2>
                  <p class="mb-4">
                    Integer sit amet odio id libero tincidunt dignissim in eget arcu. Aliquam tristique ut magna sit amet tincidunt. Sed tempor tellus nulla, molestie luctus lectus tincidunt id. You are <u>not allowed</u> to re-distribute the template ZIP file on any template collection website.
                  </p>
                <p class="mb-4">Video Catalog is a free website template for your business. This is 100% free Bootstrap v4.4.1 layout. You can modify and adapt this template for your CMS websites. You can use it for commercial or non-commercial work. If you wish to suport <a rel="nofollow" target="_parent" href="https://templatemo.com" class="tm-text-primary">TemplateMo</a>, please contact us.</p>
              </div>
            </div>
          </div>
          <div class="mx-auto pb-3 tm-about-text-container px-3">
            <div class="row">
              <div class="col-lg-6 mb-5">
                <Provider store={store}>
                  <ContactForm onSubmit={showResults} />
                </Provider>
              </div>
              <div class="col-lg-6">
                <div class="mapouter mb-60">
                  <Map />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="parallax-window parallax-window-2" data-parallax="scroll" data-image-src="assets/img/contact-2.jpg"></div>

        <div class="mx-auto tm-content-container mt-4 px-3 mb-3">
          <div class="row">
            <div class="col-12">
              <h2 class="tm-page-title mb-5 tm-text-primary">Testimonials</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 mb-5 pt-3">
              <div class="media tm-testimonial">
                <img class="mr-4 rounded-circle img-fluid" src="assets/img/testimonial-1.jpg" alt="Generic placeholder image" />
                <p class="media-body pt-3 tm-testimonial-text">
                  Vestibulum non lectus id lacus aliquet porttitor in non nulla. Aenean urna diam, finibys id lorem nec, feugiat convallis dolor. Integer aliquam, eros eget rutrum iaculis.
                                </p>
              </div>
            </div>
            <div class="col-lg-6 mb-5 pt-3">
              <div class="media tm-testimonial">
                <img class="mr-4 rounded-circle img-fluid" src="assets/img/testimonial-2.jpg" alt="Generic placeholder image" />
                <p class="media-body pt-3 tm-testimonial-text">
                  Maecenas et libero in eros laoreet finibus sed vitae diam. Etiam consetetur, nunc sed pretium elementum, diam erat fringilla tortor, placerat condimentum.
                              </p>
              </div>
            </div>
            <div class="col-lg-6 mb-5 pt-3">
              <div class="media tm-testimonial">
                <img class="mr-4 rounded-circle img-fluid" src="assets/img/testimonial-3.png" alt="Generic placeholder image" />
                <p class="media-body pt-3 tm-testimonial-text">
                  Aliquam tristique ut magna sit amet tincidunt. Sed tempor tellus nulla, molestie luctus lectus tincidunt id. Cras duismod leo a urna placerat, vel blandit turpis fermentum.
                              </p>
              </div>
            </div>
            <div class="col-lg-6 mb-5 pt-3">
              <div class="media tm-testimonial">
                <img class="mr-4 rounded-circle img-fluid" src="assets/img/testimonial-4.png" alt="Generic placeholder image" />
                <p class="media-body pt-3 tm-testimonial-text">
                  Nulla suscipit posuere lectus ut venenatis. Proin sed orci eget tellus euismod vulputate eu eu arcu. Etiam a bibendum lorem. Cura
                              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}