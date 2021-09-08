import React from "react";
import { Doughnut } from "react-chartjs-2";
import Slider from "react-slick";
import TodoListComponent from "../apps/TodoListComponent";
import { Balance } from "./Balance";
import { Income } from "./Income";
import { Expenditures } from "./Expenditures";
import { Transactions } from "./Transactions";
import { MarketWatchWidget } from "../apps/MarketWatchWidget";
import { NewsWidget } from "../apps/NewsWidget";
import { VectorMap } from "react-jvectormap";

const mapData = {
  BZ: 75.0,
  US: 56.25,
  AU: 15.45,
  GB: 25.0,
  RO: 10.25,
  GE: 33.25,
};
export const Dashboard = ()=> {
  let transactionHistoryData = {
    labels: ["Paypal", "Stripe", "Cash"],
    datasets: [
      {
        data: [55, 25, 20, 100, 670, 54],
        backgroundColor: ["#111111", "#00d25b", "#ffab00"],
      },
    ],
  };

  let transactionHistoryOptions = {
    responsive: true,
    maintainAspectRatio: true,
    segmentShowStroke: false,
    cutoutPercentage: 70,
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    legend: {
      display: true,
    },
    tooltips: {
      enabled: true,
    },
  };

  let sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

    return (
      <div className="bg-light">
        <div className="row">
          <Balance />
          <Income />
          <Expenditures />
        </div>
        <div className="row">
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card bg-light text dark border-gray">
              <div className="card-body">
                <h4 className="card-title text-dark">Transaction History</h4>
                <div className="aligner-wrapper">
                  <Doughnut
                    data={transactionHistoryData}
                    options={transactionHistoryOptions}
                  />
                  <div className="absolute center-content">
                    <h5 className="font-weight-normal text-dark text-center mb-2 text-white">
                      1200
                    </h5>
                    <p className="text-small text-dark text-center mb-0">
                      Total
                    </p>
                  </div>
                </div>
                <div className="bg-primary d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <div className="text-md-center text-xl-left text-dark">
                    <h6 className="mb-1">Transfer to Paypal</h6>
                    <p className="text-dark mb-0">07 Jan 2019, 09:12AM</p>
                  </div>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold mb-0">$236</h6>
                  </div>
                </div>
                <div className="bg-primary d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <div className="text-md-center text-xl-left text-dark">
                    <h6 className="mb-1">Tranfer to Stripe</h6>
                    <p className="text-dark mb-0">07 Jan 2019, 09:12AM</p>
                  </div>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold mb-0">$593</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Transactions />
        </div>
        <div className="row ">
        <MarketWatchWidget />
        <NewsWidget />
        </div>
        <div className="row">
          <div className="col-md-6 col-xl-4 grid-margin stretch-card">
            <div className="card bg-light text-dark">
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between">
                  <h4 className="card-title text-dark">Messages</h4>
                  <p className="text-muted mb-1 small">View all</p>
                </div>
                <div className="preview-list">
                  <div className="preview-item border-bottom">
                    <div className="preview-thumbnail">
                      <img
                        src={require("../../assets/images/faces/face6.jpg")}
                        alt="face"
                        className="rounded-circle"
                      />
                    </div>
                    <div className="preview-item-content d-flex flex-grow">
                      <div className="flex-grow">
                        <div className="d-flex d-md-block d-xl-flex justify-content-between">
                          <h6 className="preview-subject">Leonard</h6>
                          <p className="text-muted text-small">5 minutes ago</p>
                        </div>
                        <p className="text-muted">
                          Well, it seems to be working now.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="preview-item border-bottom">
                    <div className="preview-thumbnail">
                      <img
                        src={require("../../assets/images/faces/face8.jpg")}
                        alt="face"
                        className="rounded-circle"
                      />
                    </div>
                    <div className="preview-item-content d-flex flex-grow">
                      <div className="flex-grow">
                        <div className="d-flex d-md-block d-xl-flex justify-content-between">
                          <h6 className="preview-subject">Luella Mills</h6>
                          <p className="text-muted text-small">
                            10 Minutes Ago
                          </p>
                        </div>
                        <p className="text-muted">
                          Well, it seems to be working now.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="preview-item border-bottom">
                    <div className="preview-thumbnail">
                      <img
                        src={require("../../assets/images/faces/face9.jpg")}
                        alt="face"
                        className="rounded-circle"
                      />
                    </div>
                    <div className="preview-item-content d-flex flex-grow">
                      <div className="flex-grow">
                        <div className="d-flex d-md-block d-xl-flex justify-content-between">
                          <h6 className="preview-subject">Ethel Kelly</h6>
                          <p className="text-muted text-small">2 Hours Ago</p>
                        </div>
                        <p className="text-muted">Please review the tickets</p>
                      </div>
                    </div>
                  </div>
                  <div className="preview-item border-bottom">
                    <div className="preview-thumbnail">
                      <img
                        src={require("../../assets/images/faces/face11.jpg")}
                        alt="face"
                        className="rounded-circle"
                      />
                    </div>
                    <div className="preview-item-content d-flex flex-grow">
                      <div className="flex-grow">
                        <div className="d-flex d-md-block d-xl-flex justify-content-between">
                          <h6 className="preview-subject">Herman May</h6>
                          <p className="text-muted text-small">4 Hours Ago</p>
                        </div>
                        <p className="text-muted">
                          Thanks a lot. It was easy to fix it .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 grid-margin stretch-card">
            <div className="card bg-light text-dark">
              <div className="card-body">
                <h4 className="card-title text-dark">Portfolio Slide</h4>
                <Slider className="portfolio-slider" {...sliderSettings}>
                  <div className="item">
                    <img
                      src={require("../../assets/images/dashboard/Rectangle.jpg")}
                      alt="carousel-item"
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../../assets/images/dashboard/Img_5.jpg")}
                      alt="carousel-item"
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../../assets/images/dashboard/img_6.jpg")}
                      alt="carousel-item"
                    />
                  </div>
                </Slider>
                <div className="d-flex py-4">
                  <div className="preview-list w-100">
                    <div className="preview-item p-0">
                      <div className="preview-thumbnail">
                        <img
                          src={require("../../assets/images/faces/face12.jpg")}
                          className="rounded-circle"
                          alt="face"
                        />
                      </div>
                      <div className="preview-item-content d-flex flex-grow">
                        <div className="flex-grow">
                          <div className="d-flex d-md-block d-xl-flex justify-content-between">
                            <h6 className="preview-subject">CeeCee Bass</h6>
                            <p className="text-muted text-small">4 Hours Ago</p>
                          </div>
                          <p className="text-muted">
                            Well, it seems to be working now.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-muted">Well, it seems to be working now. </p>
                <div className="progress progress-md portfolio-progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-xl-4 grid-margin stretch-card">
            <div className="card bg-light text-dark">
              <div className="card-body">
                <h4 className="card-title text-dark">To do list</h4>
                <TodoListComponent />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
        </div>
      </div>
    );
  
}

export default Dashboard;
