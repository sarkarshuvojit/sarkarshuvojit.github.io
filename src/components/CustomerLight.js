import { Swiper, SwiperSlide } from "swiper/react";
import { customersSliderProps } from "../sliderProps";
const CustomerLight = () => {
  return (
    <section id="customers">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Customers</h3>
            <h3 className="title">Happy People</h3>
          </div>
          {/* /Main Title */}
          {/* Partners */}
          <div className="resumo_fn_partners">
            <ul>
              <li>
                <a href="https://envato.com/" rel="noreferrer" target="_blank">
                  <img src="img/partners/dark/1.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://frenify.com/"  rel="noreferrer" target="_blank">
                  <img src="img/partners/dark/2.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://themeforest.net/item/rewall-personal-portfolio-template/34316546"
                  rel="noreferrer"
                  target="_blank"

                >
                  <img src="img/partners/dark/3.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://themeforest.net/item/artemiz-blog-podcast-wordpress-theme/28455063"
                  rel="noreferrer"
                  target="_blank"

                >
                  <img src="img/partners/dark/4.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://themeforest.net/item/wetland-multi-purpose-react-next-js-template-for-startup/33851796" rel="noreferrer" target="_blank">
                  <img src="img/partners/dark/5.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://themeforest.net/item/edunet-react-personal-tutor-lms-dashboard-ui-kit/31635576" rel="noreferrer" target="_blank">
                  <img src="img/partners/dark/6.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://themeforest.net/item/appz-mobile-app-landing-react-nextjs-template/34385390" rel="noreferrer" target="_blank">
                  <img src="img/partners/dark/7.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://themeforest.net/item/rewall-pesonal-portfolio-react-nextjs-template/34826425" rel="noreferrer" target="_blank">
                  <img src="img/partners/dark/3.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
          {/* /Partners */}
          {/* Testimonials */}
          <div className="resumo_fn_testimonials">
            <div className="my__nav">
              <a href="#" className="prev">
                <span />
              </a>
              <a href="#" className="next">
                <span />
              </a>
            </div>
            <Swiper {...customersSliderProps} className="owl-carousel">
              <SwiperSlide className="item" key={1} >
                <div className="title_holder">
                  <p className="desc">
                    “ They really nailed it. This is one of the best themes I
                    have seen in a long time. Very nice design with lots of
                    customization available. Many of my clients have chosen this
                    theme for their portfolio sites. ”
                  </p>
                  <h3 className="title">Albert Walker</h3>
                  <h3 className="subtitle">Freelancer &amp; Designer</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item" key={2}>
                <div className="title_holder">
                  <p className="desc">
                    {`“ This was exactly what I needed for my portfolio,
                              and it looks great. I had a couple issues that
                              support helped troubleshoot both via email and on
                              the comments, which definitely made it worth the
                              price. I'm very pleased with this purchase. ”`}
                  </p>
                  <h3 className="title">Anna Barbera</h3>
                  <h3 className="subtitle">Photographer</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item" key={3}>
                <div className="title_holder">
                  <p className="desc">
                    “ Had a problem with the layout after Installation- found no
                    approach. The support reacted quickly and competently. And
                    solved the problem between Elementor and a WordPress update.
                    Great! ”
                  </p>
                  <h3 className="title">Dana Atkins</h3>
                  <h3 className="subtitle">Customer</h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* /Testimonials */}
        </div>
      </div>
    </section>
  );
};

export default CustomerLight;
