import React from "react";
import Facebook from "./Icons/Facebook";
import Instagram from "./Icons/Instagram";
import WhatsApp from "./Icons/WhatsApp";
//import Jeep from "./../../public/Jeep.png"

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
         <div className="navbar-nav flex-row flex-wrap ms-md-auto">
            <div className="col text-light d-flex justify-content-start">
            <span><img src='https://www.pikpng.com/pngl/b/375-3752649_car-icon-cartoon-carros-todo-terreno-animados-clipart.png' width='40' height='40' alt='' /></span>
            <span className='Brand'>MyCarApp</span>
            </div>
            <div className="col text-light align-middle">Powered by 
            <img src='Lamborghini.png' width='30' height='30' alt='' />
            <img src='Bugatti.png' width='50' height='24' alt='' />
            <img src='Chevrolet.png' width='40' height='23' alt='' />
            <img src='Bmw.png' width='30' height='30' alt='' />
            <img src='AlfaRomeo.png' width='32' height='32' alt='' />
            <img src='Ferrari.png' width='24' height='30' alt='' />
            <img src='Porsche.png' width='27' height='30' alt='' />
            <img src='Ford.png' width='57' height='25' alt='' />
            <img src='Toyota.png' width='40' height='25' alt='' />
            </div>
            <div className="col justify-content-end">
              <nav>
                <ul className="pagination justify-content-end">
                  <button type="button" className="btn btn-outline-info">
                    <Facebook />
                  </button>
                  <button type="button" className="btn btn-outline-light">
                    <WhatsApp />
                  </button>
                  <button type="button" className="btn btn-outline-danger">
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
