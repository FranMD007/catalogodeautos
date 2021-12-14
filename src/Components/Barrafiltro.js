import React from "react";

export default class Barrafiltro extends React.Component{
    render(){
        return(
            <div className="barrafiltro">
                <div>
                    <ul className="dropdown-header">Marcas
                            <li className="dropdown-item"> BMW  
                            <img src='Bmw.png' width='30' height='30' alt='' />
                            </li>
                            <li className="dropdown-item"> Bugatti
                            <img src='Bugatti.png' width='50' height='25' alt='' />
                            </li>
                            <li className="dropdown-item"> Chevrolet
                            <img src='Chevrolet.png' width='40' height='15' alt='' />
                            </li>
                            <li className="dropdown-item"> Ferrari
                            <img src='Ferrari.png' width='23' height='30' alt='' />
                            </li>
                            <li className="dropdown-item"> Ford
                            <img src='ford.png' width='50' height='22' alt='' />
                            </li>
                            <li className="dropdown-item"> Jeep
                            <img src='Jeep.png' width='50' height='19' alt='' />
                            </li>
                            <li className="dropdown-item"> Lamborghini
                            <img src='Lamborghini.png' width='30' height='30' alt='' />
                            </li>                       
                            <li className="dropdown-item"> Porsche
                            <img src='Porsche.png' width='22' height='30' alt='' />
                            </li>
                            <li className="dropdown-item"> Toyota
                            <img src='Toyota.png' width='30' height='20' alt='' />
                            </li>
                            <li className="dropdown-item"> Volkswagen
                            <img src='Volkswagen.png' width='30' height='30' alt='' />
                            </li> 
                    </ul>
                </div>
                <div>
                    <ul className="dropdown-header">Combustible
                        <li className="dropdown-item">Gasolina</li>
                        <li className="dropdown-item">Diesel</li>
                        <li className="dropdown-item">Eléctrico</li>
                        <li className="dropdown-item">Híbrido</li>
                    </ul>
                </div>
                <div>
                    <ul className="dropdown-header">Modelos
                        <li className="dropdown-item">1.950 ... 1.980</li>
                        <li className="dropdown-item">1.980 ... 2.000</li>
                        <li className="dropdown-item">2.000 ... 2.010</li>
                        <li className="dropdown-item">2.010 ... 2.022</li>
                    </ul>
                </div>
                <div>
                    <ul className="dropdown-header">Precio
                        <li className="dropdown-item">Menos de $ 6'000.000</li>
                        <li className="dropdown-item">$ 6'000.000 - $ 15'000.000</li>
                        <li className="dropdown-item">$ 15'000.000 - $ 30'000.000</li>
                        <li className="dropdown-item">$ 30'000.000 - $ 60'000.000</li>
                        <li className="dropdown-item">$ 60'000.000 - $ 100'000.000</li>
                        <li className="dropdown-item">Más de $ 100'000.000</li>
                    </ul>
                </div>
                <div>
                    <ul className="dropdown-header">Kilometraje
                        <li className="dropdown-item">Menos de 100.000 km</li>
                        <li className="dropdown-item">100.000 - 500.000 km</li>
                        <li className="dropdown-item">500.000 - 2'000.000 km</li>
                        <li className="dropdown-item">2'000.000 - 5'000.000 km</li>
                        <li className="dropdown-item">Más de 5'000.000 km</li>
                    </ul>
                </div>
                <div>
                    <ul className="dropdown-header">Carrocería
                        <li className="dropdown-item">Sportage</li>
                        <li className="dropdown-item">Automóvil</li>
                        <li className="dropdown-item">Pick Up</li>
                    </ul>
                </div>
            </div>
        );
    }
}