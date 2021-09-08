import React from "react";
// import { Trans } from 'react-i18next';
const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="container-fluid">
        <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
            Copyright @
            <a
              href="https://mrXavi3r.github.io/portfolio-site"
              target="_blank"
              rel="noopener noreferrer"
            >
              Xavier{" "}
            </a>{" "}
            2021
          </span>
          {/* <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Free <a href="https://www.bootstrapdash.com/react-admin-templates/" target="_blank" rel="noopener noreferrer"> react admin </a> templates from BootstrapDash.com.  </span> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
