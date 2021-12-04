import React from "react";
import { Link } from "react-router-dom";
import { db } from "../../../db";
import Estrella from "../../Icons/Estrella";

export default class Products extends React.Component {
  render() {
    return (
      <div className="containerProducts">
        {Object.entries(db).map(function (v) {
          return (
            <Link class="text-decoration-none" to={"/Products/" + v[1].productId}>
              <div className="productElement">
                <div class="card text-center border-dark">
                  <div class="card-header bg-danger">
                    <h3 class='text-dark'>{v[1].productName}</h3>
                  </div>
                  <div class="card-body bg-secondary">
                    <img
                      src={v[1].productImage}
                      alt={v[1].productName}
                      className="productImage"
                    />
                  </div>
                  <div class="card-footer text-light bg-info">
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
