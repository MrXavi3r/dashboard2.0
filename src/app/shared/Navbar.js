import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


const Navbar = () => {
  const toggleOffcanvas = () => {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  };

  const toggleRightSidebar = () => {
    document.querySelector(".right-sidebar").classList.toggle("open");
  };

  return (
    <nav className="navbar p-0 fixed-top d-flex flex-row bg-info">
      <div className="navbar-brand-wrapper bg-info d-flex d-lg-none align-items-center justify-content-center">
        <Link className="navbar-brand brand-logo-mini" to="/">
          <img src={require("../../assets/images/logo-mini.svg")} alt="logo" />
        </Link>
      </div>
      <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
        <button
          className="navbar-toggler align-self-center"
          type="button"
          onClick={() => document.body.classList.toggle("sidebar-icon-only")}
        >
          <span className="mdi mdi-menu text-dark"></span>
        </button>
        <ul className="navbar-nav w-100">
          <li className="nav-item w-100">
            <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
              <input
                type="text"
                className="form-control text-white"
                placeholder="Search..."
              />
            </form>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          {/* <Dropdown alignRight as="li" className="nav-item d-none d-lg-block">
            <Dropdown.Toggle className="nav-link btn btn-success create-new-button no-caret">
              + Create New Project
            </Dropdown.Toggle>

            <Dropdown.Menu className="navbar-dropdown preview-list create-new-dropdown-menu">
              <h6 className="p-3 mb-0">Projects</h6>
              <Dropdown.Divider />
              <Dropdown.Item
                href="!#"
                onClick={(evt) => evt.preventDefault()}
                className="preview-item"
              >
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-file-outline text-primary"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject ellipsis mb-1">
                    Software Development
                  </p>
                </div>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                href="!#"
                onClick={(evt) => evt.preventDefault()}
                className="preview-item"
              >
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-web text-info"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject ellipsis mb-1">
                    UI Development
                  </p>
                </div>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                href="!#"
                onClick={(evt) => evt.preventDefault()}
                className="preview-item"
              >
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-layers text-danger"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject ellipsis mb-1">
                    Software Testing
                  </p>
                </div>
              </Dropdown.Item>
              <Dropdown.Divider />
              <p className="p-3 mb-0 text-center">See all projects</p>
            </Dropdown.Menu>
          </Dropdown> */}
          <li className="nav-item d-none d-lg-block">
            <a
              className="nav-link"
              href="!#"
              onClick={(event) => event.preventDefault()}
            >
              <i className="mdi mdi-view-grid"></i>
            </a>
          </li>
          <Dropdown alignRight as="li" className="nav-item border-left">
            <Dropdown.Toggle
              as="a"
              className="nav-link count-indicator cursor-pointer"
            >
              <i className="mdi mdi-email"></i>
              <span className="count bg-success"></span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="navbar-dropdown preview-list">
              <h6 className="p-3 mb-0">Messages</h6>
              <Dropdown.Divider />
              <Dropdown.Item
                href="!#"
                onClick={(evt) => evt.preventDefault()}
                className="preview-item"
              >
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <img
                      src={require("../../assets/images/faces/face4.jpg")}
                      alt="profile"
                      className="rounded-circle profile-pic"
                    />
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject ellipsis mb-1">
                    Mark send you a message
                  </p>
                  <p className="text-muted mb-0"> 1 Minutes ago </p>
                </div>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                href="!#"
                onClick={(evt) => evt.preventDefault()}
                className="preview-item"
              >
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <img
                      src={require("../../assets/images/faces/face2.jpg")}
                      alt="profile"
                      className="rounded-circle profile-pic"
                    />
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject ellipsis mb-1">
                    Craig send you a message
                  </p>
                  <p className="text-muted mb-0"> 15 Minutes ago </p>
                </div>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                href="!#"
                onClick={(evt) => evt.preventDefault()}
                className="preview-item"
              >
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <img
                      src={require("../../assets/images/faces/face3.jpg")}
                      alt="profile"
                      className="rounded-circle profile-pic"
                    />
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject ellipsis mb-1">
                    Profile picture updated
                  </p>
                  <p className="text-muted mb-0"> 18 Minutes ago </p>
                </div>
              </Dropdown.Item>
              <Dropdown.Divider />
              <p className="p-3 mb-0 text-center">4 new messages</p>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown alignRight as="li" className="nav-item border-left">
            <Dropdown.Toggle
              as="a"
              className="nav-link count-indicator cursor-pointer"
            >
              <i className="mdi mdi-bell"></i>
              <span className="count bg-danger"></span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu navbar-dropdown preview-list">
              <h6 className="p-3 mb-0">Notifications</h6>
              <Dropdown.Divider />
              <Dropdown.Item
                className="dropdown-item preview-item"
                onClick={(evt) => evt.preventDefault()}
              >
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-calendar text-success"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject mb-1">Event today</p>
                  <p className="text-muted ellipsis mb-0">
                    Just a reminder that you have an event today
                  </p>
                </div>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                className="dropdown-item preview-item"
                onClick={(evt) => evt.preventDefault()}
              >
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-settings text-danger"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject mb-1">Settings</h6>
                  <p className="text-muted ellipsis mb-0">Update dashboard</p>
                </div>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                className="dropdown-item preview-item"
                onClick={(evt) => evt.preventDefault()}
              >
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-link-variant text-warning"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject mb-1">Launch Admin</h6>
                  <p className="text-muted ellipsis mb-0">New admin wow!</p>
                </div>
              </Dropdown.Item>
              <Dropdown.Divider />
              <p className="p-3 mb-0 text-center">See all notifications</p>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown alignRight as="li" className="nav-item">
            <Dropdown.Toggle
              as="a"
              className="nav-link cursor-pointer no-caret"
            >
              <div className="navbar-profile">
                <img
                  className="img-xs rounded-circle"
                  src={require("../../assets/images/faces/face15.jpg")}
                  alt="profile"
                />
                <p className="mb-0 d-none d-sm-block navbar-profile-name">
                  Xavier Ritch
                </p>
                <i className="mdi mdi-menu-down d-none d-sm-block text-dark"></i>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className="navbar-dropdown preview-list navbar-profile-dropdown-menu">
              <h6 className="p-3 mb-0">Profile</h6>
              <Dropdown.Divider />
              <Dropdown.Item
                href="!#"
                onClick={(evt) => evt.preventDefault()}
                className="preview-item"
              >
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-settings text-success"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject mb-1">Settings</p>
                </div>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                href="!#"
                onClick={(evt) => evt.preventDefault()}
                className="preview-item"
              >
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-logout text-danger"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject mb-1">Log Out</p>
                </div>
              </Dropdown.Item>
              <Dropdown.Divider />
              <p className="p-3 mb-0 text-center">Advanced settings</p>
            </Dropdown.Menu>
          </Dropdown>
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          onClick={toggleOffcanvas}
        >
          <span className="mdi mdi-format-line-spacing text-dark"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
