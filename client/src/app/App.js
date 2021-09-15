import React, { useState, useEffect, useCallback, useRef } from "react";
import { withRouter } from "react-router-dom";
import "./App.scss";
import AppRoutes from "./AppRoutes";
import Navbar from "./shared/Navbar";
import Sidebar from "./shared/Sidebar";
import Footer from "./shared/Footer";

const App = (props) => {
  const [isFullPageLayout, setIsFullPageLayout] = useState(false);
  const prevLocation = useRef(props.location).current;

  const onRouteChanged = useCallback(() => {

    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = [
      "/user-pages/login-1",
      "/user-pages/login-2",
      "/user-pages/register-1",
      "/user-pages/register-2",
      "/user-pages/lockscreen",
      "/error-pages/error-404",
      "/error-pages/error-500",
      "/general-pages/landing-page",
    ];
    for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
      if (props.location.pathname === fullPageLayoutRoutes[i]) {
        setIsFullPageLayout(true);
        document
          .querySelector(".page-body-wrapper")
          .classList.add("full-page-wrapper");
        break;
      } else {
        setIsFullPageLayout(false);
        document
          .querySelector(".page-body-wrapper")
          .classList.remove("full-page-wrapper");
      }
    }
  }, [props.location.pathname]);

  useEffect(() => {
    if (props.location !== prevLocation) {
      onRouteChanged();
    }
  });

  let navbarComponent = !isFullPageLayout ? <Navbar /> : "";
  let sidebarComponent = !isFullPageLayout ? <Sidebar /> : "";
  let footerComponent = !isFullPageLayout ? <Footer /> : "";
  return (
    <div className="container-scroller">
      {sidebarComponent}
      <div className="container-fluid page-body-wrapper">
        {navbarComponent}
        <div className="main-panel">
          <div className="content-wrapper bg-light">
            <AppRoutes />
          </div>
          {footerComponent}
        </div>
      </div>
    </div>
  );
};

export default (withRouter(App));