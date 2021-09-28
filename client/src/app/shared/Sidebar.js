import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse, Dropdown } from "react-bootstrap";

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach((i) => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach((i) => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: "/apps", state: "appsMenuOpen" },
      { path: "/transactions", state: "transactionsMenuOpen" },
      { path: "/market-watch", state: "marketWatchMenuOpen" },
      { path: "/news", state: "newsMenuOpen" },
      { path: "/goals", state: "goalsMenuOpen" },
      { path: "/planner", state: "plannerMenuOpen" },
      { path: "/user-pages", state: "userPagesMenuOpen" },
      { path: "/error-pages", state: "errorPagesMenuOpen" },
    ];

    dropdownPaths.forEach((obj) => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true });
      }
    });
  }

  render() {
    return (
      <nav className="sidebar sidebar-offcanvas bg-info" id="sidebar">
        <div className="sidebar-brand-wrapper d-none bg-info d-lg-flex align-items-center justify-content-center fixed-top">
          <Link className="sidebar-brand brand-logo" to="/dashboard">
            <img src={require("../../assets/images/logo.svg")} alt="logo" />
          </Link>
          <a className="sidebar-brand brand-logo-mini" href="/dashboard">
            <img
              src={require("../../assets/images/logo-mini.svg")}
              alt="logo"
            />
          </a>
        </div>
        <ul className="nav position-fixed">
          <li className="nav-item profile">
            <div className="profile-desc">
              <div className="profile-pic">
                <div className="count-indicator">
                  <img
                    className="img-xs rounded-circle bg-danger"
                    src={require("../../assets/images/xavier.svg")}
                    alt="profile"
                  />
                  <span className="count bg-success"></span>
                </div>
                <div className="profile-name">
                  <h5 className="mb-0 font-weight-normal">Xavier Ritch</h5>
                  <span className="text-light">Administrator</span>
                </div>
              </div>
              <Dropdown alignRight>
                <Dropdown.Toggle as="a" className="cursor-pointer no-caret">
                  <i className="mdi mdi-dots-vertical text-dark"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="sidebar-dropdown preview-list">
                  <a
                    href="!#"
                    className="dropdown-item preview-item"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-settings text-primary"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small">
                        Account settings
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    href="!#"
                    className="dropdown-item preview-item"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-onepassword  text-info"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small">
                        Change Password
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    href="!#"
                    className="dropdown-item preview-item"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-calendar-today text-success"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small">
                        To-do list
                      </p>
                    </div>
                  </a>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link text-dark">Navigation</span>
          </li>
          <li
            className={
              this.isPathActive("/dashboard")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <Link className="nav-link" to="/dashboard">
              <span className="menu-icon bg-dark">
                <i className="mdi mdi-speedometer"></i>
              </span>
              <span className="menu-title text-light">Dashboard</span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/transactions")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <div
              className={
                this.state.basicUiMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("transactionsMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-icon bg-dark">
                <i className="mdi mdi-swap-horizontal"></i>
              </span>
              <span className="menu-title text-light">Transactions</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.transactionsMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/transactions/AddTransaction")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/transactions/AddTransaction"
                    >
                      Add Transaction
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/transactions/TransactionList")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/transactions/TransactionList"
                    >
                      Transaction List
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/transactions/typography")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/transactions/typography"
                    >
                      Typography
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/market-watch")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <div
              className={
                this.state.marketWatchMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("marketWatchMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-icon bg-dark">
                <i className="mdi mdi-scale-balance text-success"></i>
              </span>
              <span className="menu-title text-light">Market Watch</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.marketWatchMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item text-light">
                    <Link
                      className={
                        this.isPathActive("/market-watch/manageSymbols")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/market-watch/manageSymbols"
                    >
                      Manage Symbols
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/news")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <div
              className={
                this.state.newsMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("newsMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-icon bg-dark">
                <i className="mdi mdi-newspaper text-danger"></i>
              </span>
              <span className="menu-title text-light">News</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.newsMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/news/basic-table")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/news/basic-table"
                    >
                      Basic Table
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/planner")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <div
              className={
                this.state.plannerMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("plannerMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-icon bg-dark">
                <i className="mdi mdi-calendar-edit text-primary"></i>
              </span>
              <span className="menu-title text-light">Planner</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.plannerMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/planner/Calendar.js")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/planner/Calendar.js"
                    >
                      Calendar
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/goals")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <div
              className={
                this.state.goalsMenuOpen ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("goalsMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-icon bg-dark">
                <i className="mdi mdi-medal"></i>
              </span>
              <span className="menu-title text-light">Goals</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.goalsMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/goals/mdi")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/goals/mdi"
                    >
                      Goals
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/user-pages")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <div
              className={
                this.state.userPagesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("userPagesMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-icon bg-dark">
                <i className="mdi mdi-security"></i>
              </span>
              <span className="menu-title text-light">User Pages</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.userPagesMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/user-pages/login-1")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/user-pages/login-1"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/user-pages/register-1")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/user-pages/register-1"
                    >
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link text-dark">More</span>
          </li>
          <li
            className={
              this.isPathActive("/error-pages")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <div
              className={
                this.state.errorPagesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("errorPagesMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-icon bg-dark">
                <i className="mdi mdi-lock"></i>
              </span>
              <span className="menu-title text-light">Error Pages</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.errorPagesMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/error-pages/error-404")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/error-pages/error-404"
                    >
                      404
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/error-pages/error-500")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/error-pages/error-500"
                    >
                      500
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className="nav-item menu-items">
            <a
              className="nav-link"
              href="http://bootstrapdash.com/demo/corona-react-free/documentation/documentation.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="menu-icon bg-dark">
                <i className="mdi mdi-file-document-box"></i>
              </span>
              <span className="menu-title text-light">Documentation</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Sidebar);
