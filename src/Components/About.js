import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-6 align-self-start">
              <h1 className='mvt text-warning'>Misión</h1>
              <bk/>
              <h3 className='mv text-danger'>“Nos esforzamos por conectar a las personas, para que puedan vender sus vehículos de forma fácil desde la comodidad de sus hogares”.</h3>
            </div>
            <div class="col-6 align-self-start">
              
            </div>
            <div class="col-6 align-self-end">
              
            </div>
            <div class="col-6 align-self-end">
              <h1 className='mvt text-warning'>Visión</h1>
              <bk/>
              <h3 className='mv text-danger'>“Ser la compañía más conocida en Colombia, donde nuestros clientes pueden encontrar y descubrir los vehículos que desean comprar”.</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
