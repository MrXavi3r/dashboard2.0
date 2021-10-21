import React, { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { suggestionsData } from "../data";
export const Suggestions = () => {
  const [showSuggestions, setShowSuggestions] = useState(true);

  return (
    <div className="col-md-6 col-xl-6 px-2 grid-margin stretch-card">
      <div className="card bg-light text-dark shadow">
        <div className="card-body">
          <div className="d-flex flex-row justify-content-between">
            <h4 className="card-title text-dark">Suggestions</h4>
            <Button
              onClick={() => setShowSuggestions(!showSuggestions)}
              className=""
            >
              {showSuggestions ? "hide" : "view all"}
            </Button>
          </div>
          <div className={showSuggestions ? "preview-list" : "d-none"}>
            <ListGroup className="">
              {suggestionsData.map((item) => {
                return (
                  <ListGroup.Item
                    key={item.id}
                    className={`d-flex align-items-center justify-content-center border border-${item.bgc} rounded my-2 shadow`}
                  >
                    <div className="w-25 d-flex align-items-center justify-content-center">
                      <span className="w-75 d-flex d-flex align-items-center justify-content-center">
                        <i
                          className={`mdi mdi-${item.icon} text-${item.bgc} mdi-48px`}
                        ></i>
                      </span>
                    </div>
                    <div className="w-75">
                      <h5>{item.title}</h5>
                      <p className="mb-0">{item.desc}</p>
                    </div>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </div>
        </div>
      </div>
    </div>
  );
};
