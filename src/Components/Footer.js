import React from "react";
import Facebook from "./Icons/Facebook";
import Instagram from "./Icons/Instagram";
import WhatsApp from "./Icons/WhatsApp";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div class="container">
          <div class="navbar-nav flex-row flex-wrap ms-md-auto">
            <div class="col text-light align-middle">Brand 
            </div>
            <div class="col text-danger align-middle">Powered by 
            <img src='Lamborghini.png' width='30' height='30' alt='' />
            <img src='Bugatti.png' width='50' height='30' alt='' />
            <img src='Chevrolet.png' width='40' height='30' alt='' />
            <img src='Bmw.png' width='30' height='30' alt='' />
            <img src='AlfaRomeo.png' width='30' height='30' alt='' />
            <img src='Ferrari.png' width='30' height='30' alt='' />
            <img src='Porsche.png' width='30' height='30' alt='' />
            <img src='Ford.png' width='50' height='30' alt='' />
            <img src='Toyota.png' width='50' height='30' alt='' />
            </div>
            <div class="col justify-content-end">
              <nav>
                <ul class="pagination justify-content-end">
                  <button type="button" class="btn btn-outline-info">
                    <Facebook />
                  </button>
                  <button type="button" class="btn btn-outline-light">
                    <WhatsApp />
                  </button>
                  <button type="button" class="btn btn-outline-danger">
                    <Instagram />
                  </button>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
