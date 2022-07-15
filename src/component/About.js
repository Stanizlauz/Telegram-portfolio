import React from "react";

export default function About() {
  return (
    <>
      <section className="bg-primary hiro-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center wow fadeInUp">
              <h2 className="section-title mb-3">Crypto Expert & Forex Manager.</h2>
              <p className="section-text-ct">
              I'm a proffessional Forex/Cryptocurrency Trader and an Investment Manager. I major in wealth creation and management using apt planning, fail-proof trading and investment strategies. I'm currently employed at Crox Trading Inc. CRD#:35443, and partner with a number of trading platforms. I have worked as a personal finance expert in various capacities for over 11 years and counting. During this time, I have served some of the most renowned finance management establishments in the country, served on a number of boards and spearheaded the creation of a few finance start ups. Over the years I have helped over 1200 families and individuals realize their financial goals and enjoy a wealthy life style. I’m duly registered and accredited by FINRA and other top brokerage regulatory bodies. I have aced 3 major brokerage qualification exams and hold 3 state licences
              </p>
            </div>
            <div className="col-md-6 wow fadeInUp">
              <img
                src="assets/images/helen-avatar3.jpg"
                className="w-100 mb-5"
                alt="Digital Product Design"
              />
              <p className="section-text-light">
              The very principles of economics suggest scarcity, validity and demand can transform anything, even a stone, into a store-of-value. Such an event will happen only once in an era and we are extremely fortunate to be witnessing the birth of a new type of crypto
              </p>
              {/* <button className="hiro-btn-outline">VIEW MORE</button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
