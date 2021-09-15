import React from 'react'
import Slider from "react-slick";

export const SliderWidget = () => {

    let sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

    return (
        <div className="col-md-6 col-xl-4 grid-margin stretch-card">
            <div className="card bg-light text-dark">
              <div className="card-body">
                <h4 className="card-title text-dark">Portfolio</h4>
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
    )
}
