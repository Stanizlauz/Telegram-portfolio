import React from "react";

export default function Services() {
  return (
    <>
      <section className="hiro-section" id="services">
        <div className="container">
          <div className="service-section">
            <h2 className="section-title career-section-title">Our Services</h2>
            <div className="row">
              <div className="col-md-4 mb-4 mb-md-0 wow fadeInUp">
                <h6 className="service-category-title">Planning & Research</h6>
                {/* <ul className="service-list list-group list-group-flush">
                  <li className="list-group-item">UI &amp; UX design</li>
                  <li className="list-group-item">
                    Graphic Design &amp; identity
                  </li>
                  <li className="list-group-item">Video Production</li>
                  <li className="list-group-item">Market Analysis</li>
                  <li className="list-group-item">Deep Campaign Strategy</li>
                </ul> */}
                <p>
                  I do a lot of planning and extensive research before I start
                  up any trade, investment or financial adventure. These two
                  keywords have been the bedrock of my success over the years
                </p>
              </div>
              <div className="col-md-4 mb-4 mb-md-0 wow fadeInUp">
                <h6 className="service-category-title">
                  Analysis & Development
                </h6>
                {/* <ul className="service-list list-group list-group-flush">
                  <li className="list-group-item">UI &amp; UX design</li>
                  <li className="list-group-item">
                    Graphic Design &amp; identity
                  </li>
                  <li className="list-group-item">Video Production</li>
                  <li className="list-group-item">Market Analysis</li>
                  <li className="list-group-item">Deep Campaign Strategy</li>
                </ul> */}
                <p>
                  Analysing your market based on the high/low index is the next
                  step to follow through before going on any trade. Always
                  develop the right strategy to trade with before investing in a
                  market.
                </p>
              </div>
              <div className="col-md-4 mb-4 mb-md-0 wow fadeInUp">
                <h6 className="service-category-title">Testing & Review</h6>
                {/* <ul className="service-list list-group list-group-flush">
                  <li className="list-group-item">UI &amp; UX design</li>
                  <li className="list-group-item">
                    Graphic Design &amp; identity
                  </li>
                  <li className="list-group-item">Video Production</li>
                  <li className="list-group-item">Market Analysis</li>
                  <li className="list-group-item">Deep Campaign Strategy</li>
                </ul> */}
                <p>
                  Before going all in, I test my strategy with demo accounts or
                  starting small. This gives me feedback with data to review and
                  decide if I'm sticking to a particular strategy or not.
                </p>
              </div>
              <div className="col-md-4 mb-4 mb-md-0 wow fadeInUp">
                <h6 className="service-category-title">
                  Trading Without Restrictions
                </h6>
                {/* <ul className="service-list list-group list-group-flush">
                  <li className="list-group-item">UI &amp; UX design</li>
                  <li className="list-group-item">
                    Graphic Design &amp; identity
                  </li>
                  <li className="list-group-item">Video Production</li>
                  <li className="list-group-item">Market Analysis</li>
                  <li className="list-group-item">Deep Campaign Strategy</li>
                </ul> */}
                <p>
                  Once you've gone through these processes and developed your
                  unique trading strategy, you're good to go. Remember, There's
                  always need to review incase your strategy falls through.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br /> <br />
        <div className="container aos-init aos-animate bg-light" data-aos="fade-up">
          <div className="section-title">
            <h2 className="section-title career-section-title">Facts</h2>
            <hr/>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div>
                <img
                  className="square1"
                  src="http://cdn.onlinewebfonts.com/svg/img_453385.png"
                  alt="happy"
                  height={40}
                  width={40}
                />

                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
              <img
                  className="square1"
                  src="https://cdn3.iconfinder.com/data/icons/solid-webi-con-1-black/128/Trusted_Trust_Certified_Reputation-512.png"
                  alt="happy"
                  height={40}
                  width={40}
                />
                
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={521}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Trustworthy</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
              <img
                  className="square1"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdub0xi8sEol4Lqq8XUta5ez2zixEallK-sg&usqp=CAU"
                  alt="happy"
                  height={40}
                  width={40}
                />
              
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={1463}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>24 Hours Of Support</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
              <img
                  className="square1"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8MajO5H6IDeWJ7SuU66EjF9tFWAE1e7N_iw&usqp=CAU"
                  alt="happy"
                  height={40}
                  width={40}
                />
             
                <i className="bi bi-graph-up" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={25}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Reliable</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
