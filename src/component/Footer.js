import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="hiro-footer wow fadeInUp">
        <div className="container d-flex flex-wrap justify-content-lg-between align-items-center">
          <p className="mb-0 footer-text">
            {" "}
            <a
              href="https://www.bootstrapdash.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reset"
            >
              Miss Helen Williams
            </a>{" "}
            
          </p>
          <nav className="footer-nav nav">
          <a href="https://t.me/Experthelen" className="nav-link">
              Telegram
            </a>
            {/* <a href="#!" className="nav-link">
              Terms and Conditions
            </a>
            <a href="#!" className="nav-link">
              Privacy Policy
            </a>
            <a href="#!" className="nav-link">
              Cookie Policy
            </a> */}
          </nav>
        </div>
      </footer>
    </>
  );
}
