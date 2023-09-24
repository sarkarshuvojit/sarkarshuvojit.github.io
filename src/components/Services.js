const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Services</h3>
            <h3 className="title">What I Do</h3>
            <p className="desc">
              I help ambitious businesses like yours generate more profits by
              building awareness, driving web traffic, connecting with customers
              and growing overall sales.
            </p>
          </div>
          {/* /Main Title */}
          {/* Services List */}
          <div className="resumo_fn_service_list">
            <ul>
              <li>
                <div className="item">
                  <div className="item_left">
                    <h3>Brand Consultant</h3>
                    <p>
                      I build brands through cultural insights &amp; strategic
                      vision. Custom crafted business solutions.
                    </p>
                  </div>
                  <div className="item_right">
                    <p>Starts from</p>
                    <h3>$599</h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="item_left">
                    <h3>Global Marketing</h3>
                    <p>
                      Custom marketing solutions. Get your business on the next
                      level. We provide worldwide marketing.
                    </p>
                  </div>
                  <div className="item_right">
                    <p>Starts from</p>
                    <h3>$399</h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="item_left">
                    <h3>UI/UX Solutions</h3>
                    <p>
                      Design direction for business. Get your business on the
                      next level. We help to create great experiences.
                    </p>
                  </div>
                  <div className="item_right">
                    <p>Starts from</p>
                    <h3>$499</h3>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* /Services List */}
        </div>
      </div>
    </section>
  );
};

export default Services;
