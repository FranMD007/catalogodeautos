import React from "react";
import { Link } from "react-router-dom";
import { db } from "../../../db";
import Estrella from "../../Icons/Estrella";

export default class Products extends React.Component {
  render() {
    return (
      <div className="containerProducts">
        {Object.entries(db).map(function (v) {
          console.log(v);
          return (
            <Link
              className="text-decoration-none"
              to={"/Products/" + v[1].productId}
            >
              <div className="productElement">
                <div className="card text-center border-dark">
                  <div className="card-header bg-danger">
                    <h3 className="text-dark">{v[1].productName}</h3>
                  </div>
                  <div className="card-body bg-secondary">
                    <img
                      src={v[1].productImage}
                      alt={v[1].productName}
                      className="productImage"
                    />
                  </div>
                  <div className="card-footer text-light bg-info">
                    <p className="rating">
                      Rating: {Array(v[1].rating).fill(<Estrella />)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
