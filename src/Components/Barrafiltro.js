import React from "react";

export default class Barrafiltro extends React.Component{
    render(){
        return(
            <div className="barrafiltro">
                <div>
                    <ul class="dropdown-header">Marcas
                            <li class="dropdown-item"> BMW 
                            <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png' alt='BMW' width='30' height='30'/>
                            </li>                
                    </ul>
                </div>
                <div>
                    <ul class="dropdown-header">Combustible
                        <li class="dropdown-item">Gasolina</li>
                        <li class="dropdown-item">Diesel</li>
                        <li class="dropdown-item">Eléctrico</li>
                        <li class="dropdown-item">Híbrido</li>
                    </ul>
                </div>
                <div>
                    <ul class="dropdown-header">Modelos
                        <li class="dropdown-item">1.950 ... 1.980</li>
                        <li class="dropdown-item">1.980 ... 2.000</li>
                        <li class="dropdown-item">2.000 ... 2.010</li>
                        <li class="dropdown-item">2.010 ... 2.022</li>
                    </ul>
                </div>
                <div>
                    <ul class="dropdown-header">Precio
                        <li class="dropdown-item">Menos de $ 6'000.000</li>
                        <li class="dropdown-item">$ 6'000.000 - $ 15'000.000</li>
                        <li class="dropdown-item">$ 15'000.000 - $ 30'000.000</li>
                        <li class="dropdown-item">$ 30'000.000 - $ 60'000.000</li>
                        <li class="dropdown-item">$ 60'000.000 - $ 100'000.000</li>
                        <li class="dropdown-item">Más de $ 100'000.000</li>
                    </ul>
                </div>
                <div>
                    <ul class="dropdown-header">Kilometraje
                        <li class="dropdown-item">Menos de 100.000 km</li>
                        <li class="dropdown-item">100.000 - 500.000 km</li>
                        <li class="dropdown-item">500.000 - 2'000.000 km</li>
                        <li class="dropdown-item">2'000.000 - 5'000.000 km</li>
                        <li class="dropdown-item">Más de 5'000.000 km</li>
                    </ul>
                </div>
                <div>
                    <ul class="dropdown-header">Carrocería
                        <li class="dropdown-item">Sportage</li>
                        <li class="dropdown-item">Automóvil</li>
                        <li class="dropdown-item">Pick Up</li>
                    </ul>
                </div>
            </div>
        );
    }
}