import React from "react";

export default function Header() {
  return (
    <>
      <header className="hiro-header home-header" id="top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand font-weight-bolder" href="index.html">
            Helen Williams.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse bg-dark" id="navbarText">
            <ul className="navbar-nav mr-auto text-center">
              <li className="nav-item active">
                <a className="nav-link font-weight-bold text-white" href="index.html">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold text-white" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold text-white" href="#examination">
                  Examination
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold text-white" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold text-white" href="#contacts">
                  Let's Talk
                </a>
              </li>
            </ul>
            {/* <span className="navbar-text">
              Navbar text with an inline element
            </span> */}
          </div>
        </nav>

        {/* <nav>
          <div className="container">
            <div className="hiro-nav">
              <a href="index.html" className="nav-brand">
                <img src="assets/images/logo.svg" alt="Hiro" className="logo" />
                <img
                  src="assets/images/logo_white.svg"
                  alt="Hiro"
                  className="logo-white"
                />
              </a>
              <button className="hiro-nav-popup-toggle">
                <svg
                  width="20px"
                  height="18px"
                  viewBox="0 0 20 18"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="Hiro"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="hiro-agency"
                      transform="translate(-964.000000, -37.000000)"
                      fill="#FFFFFF"
                    >
                      <g id="Menu" transform="translate(964.000000, 37.000000)">
                        <g id="menu">
                          <rect
                            id="Rectangle"
                            fillRule="nonzero"
                            x="-8.05281767e-14"
                            y="7.50795322"
                            width="19.9609942"
                            height="2.4951462"
                          />
                          <rect
                            id="Rectangle"
                            fillRule="nonzero"
                            x="-8.05281767e-14"
                            y="14.9964327"
                            width="19.9609942"
                            height="2.4951462"
                          />
                          <rect
                            id="Rectangle"
                            fillRule="nonzero"
                            x="-8.05281767e-14"
                            y="0.0194736842"
                            width="19.9609942"
                            height="2.4951462"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </nav> */}
        <div className="container wow fadeInUp">
          <div
            id="hiroHeaderCarousel"
            className="hiro-header-carousel carousel slide"
            data-ride="carousel"
            data-interval={3500}
          >
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-6">
                    <h1
                      className="carousel-item-title"
                      data-animation="animated fadeInRight"
                      data-number={1}
                    >
                      <span>Professional Crypto/Forex Expert</span>
                    </h1>
                    <p
                      className="carousel-item-description"
                      data-animation="animated fadeInRight"
                    >
                     “Invest for the long haul. Don't get too greedy and don't get too scared.”
                    </p>
                    <a
                      href="#!"
                      className="carousel-item-link link-hover-fx"
                      data-animation="animated fadeInRight"
                    >
                      READ MORE
                    </a>
                    <ul
                      className="carousel-item-social-links nav"
                      data-animation="animated fadeInRight"
                    >
                      <li>
                        <a href="https://t.me/Experthelen" className="link-hover-fx">
                          Telegram
                        </a>
                      </li>
                      <li>
                        {/* <a href="#!" className="link-hover-fx">
                          TWITTER
                        </a> */}
                      </li>
                      <li>
                        {/* <a href="#!" className="link-hover-fx">
                          BEHANCE
                        </a> */}
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/images/helen-avatar1.jpg"
                      alt="Remarkable Digital Products"
                      className="img-fluid w-100 rounded"
                      width="372px"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6">
                    <h1
                      className="carousel-item-title"
                      data-animation="animated fadeInRight"
                      data-number={2}
                    >
                      <span>Professional Crypto/Forex Expert</span>
                    </h1>
                    <p
                      className="carousel-item-description"
                      data-animation="animated fadeInRight"
                    >
                      “Money is always eager and ready to work for anyone who is ready to employ it.”
                    </p>
                    <a
                      href="#!"
                      className="carousel-item-link link-hover-fx"
                      data-animation="animated fadeInRight"
                    >
                      READ MORE
                    </a>
                    <ul
                      className="carousel-item-social-links nav"
                      data-animation="animated fadeInRight"
                    >
                      <li>
                        <a href="https://t.me/Experthelen" className="link-hover-fx">
                          Telegram
                        </a>
                      </li>
                      <li>
                        {/* <a href="#!" className="link-hover-fx">
                          TWITTER
                        </a> */}
                      </li>
                      <li>
                        {/* <a href="#!" className="link-hover-fx">
                          BEHANCE
                        </a> */}
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/images/helen-avatar2.jpg"
                      alt="<span>Remarkable Digital Products</span>"
                      className="img-fluid w-100 rounded"
                      width="372px"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6">
                    <h1
                      className="carousel-item-title"
                      data-animation="animated fadeInRight"
                      data-number={3}
                    >
                      <span>Professional Crypto/Forex Expert</span>
                    </h1>
                    <p
                      className="carousel-item-description"
                      data-animation="animated fadeInRight"
                    >
                      “Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble”
                    </p>
                    <a
                      href="#!"
                      className="carousel-item-link link-hover-fx"
                      data-animation="animated fadeInRight"
                    >
                      READ MORE
                    </a>
                    <ul
                      className="carousel-item-social-links nav"
                      data-animation="animated fadeInRight"
                    >
                      <li>
                        <a href="https://t.me/Experthelen" className="link-hover-fx">
                          Telegram
                        </a>
                      </li>
                      <li>
                        {/* <a href="#!" className="link-hover-fx">
                          TWITTER
                        </a> */}
                      </li>
                      <li>
                        {/* <a href="#!" className="link-hover-fx">
                          BEHANCE
                        </a> */}
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/images/helen-avatar4.jpg"
                      alt="Remarkable Digital Products"
                      className="img-fluid w-100 rounded"
                      width="372px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <ol className="carousel-indicators">
              <li
                data-target="#hiroHeaderCarousel"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#hiroHeaderCarousel" data-slide-to={1} />
              <li data-target="#hiroHeaderCarousel" data-slide-to={2} />
            </ol>
          </div>
        </div>
      </header>

      <div className="hiro-nav-popup-modal" id="accordionSidebar">
        <div className="hiro-nav-popup-modal-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 menu-wrapper">
                <ul className="nav hiro-main-nav">
                  <li className="nav-item">
                    <a href="index.html" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#about" className="nav-link">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#services" className="nav-link">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#works" className="nav-link">
                      Works
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 blog-posts text-white">
                <h5 className="popup-blog-headng">Blog</h5>
                <div className="media mb-4">
                  <img
                    src="assets/images/Blog_small2.jpg"
                    alt="blog"
                    width="86px"
                    className="img-fluid mr-4"
                  />
                  <div className="media-body align-self-end">
                    <h5 className="popup-blog-post-title">
                      Ambitious <br /> designs
                    </h5>
                  </div>
                </div>
                <div className="media mb-4">
                  <img
                    src="assets/images/Blog_small1.jpg"
                    alt="blog"
                    width="86px"
                    className="img-fluid mr-4"
                  />
                  <div className="media-body align-self-end">
                    <h5 className="popup-blog-post-title">
                      The Collection <br /> Cover Archive
                    </h5>
                  </div>
                </div>
                <p>
                  <a
                    href="blog.html"
                    className="text-white link-hover-fx text-decoration-none"
                  >
                    View more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
