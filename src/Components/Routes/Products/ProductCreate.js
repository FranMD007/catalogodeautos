import React from "react";

export default class ProductCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Linea: "Línea",
      Marca: "Marca",
      Tipo: "",
      Transmision: "",
      Combustible: "",
      Puertas: "",
      Direccion: "",
      Precio: "0",
      Modelo: "Modelo",
      Imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png",
    };
    //Binds
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.name === "linea") {
      this.setState({ Linea: e.target.value });
    } else {
      if (e.target.name === "marca") {
        this.setState({ Marca: e.target.value });
      } else {
        if (e.target.name === "tipo") {
          this.setState({ Tipo: e.target.value });
        } else {
          if (e.target.name === "transmision") {
            this.setState({ Transmision: e.target.value });
          } else {
            if (e.target.name === "combustible") {
              this.setState({ Combustible: e.target.value });
            } else {
              if (e.target.name === "puertas") {
                this.setState({ Puertas: e.target.value });
              } else {
                if (e.target.name === "direccion") {
                  this.setState({ Direccion: e.target.value });
                } else {
                  if (e.target.name === "precio") {
                    this.setState({ Precio: e.target.value });
                  } else {
                    if (e.target.name === "modelo") {
                      console.log(e);
                      this.setState({ Modelo: e.target.value });
                    } else {
                      if (e.target.name === "imagen") {
                        alert("Si esta leyendo algo");
                        console.log(e.target.files);
                        this.setState({ Imagen: e.target.files});
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="containerProducts">
                <div className="card text-center border-dark">
                  <div className="card-header bg-danger">
                    <h4>{this.state.Marca}</h4>
                    <br />
                    <h5>{this.state.Linea}</h5>
                  </div>
                  <div className="card-body bg-secondary">
                    <img
                      src={this.state.Imagen}
                      alt={this.state.Imagen}
                      className="productImage"
                    />
                  </div>
                  <div className="card-footer text-light bg-info">
                    <h5>Precio: ${this.state.Precio}</h5>
                    <br />
                    <h5>Modelo: {this.state.Modelo}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <form
                className="row g-3"
                encType="multipart/from-data"
                onSubmit={this.handleSubmit}
              >
                <div className="col-md-4 form-floating">
                  <input
                    className="form-control"
                    list="Listadelinea"
                    name="linea"
                    id="examplelinea"
                    onChange={this.handleChange}
                    required
                  />
                  <label for="floatingdatalist" class="form-label text-danger">
                    Escoje la línea del vehículo
                  </label>
                  <datalist id="Listadelinea">
                    <option value="Aveo" />
                    <option value="Picanto" />
                    <option value="Prado" />
                    <option value="March" />
                    <option value="Sandero" />
                    <option value="Ranger" />
                    <option value="Twingo" />
                  </datalist>
                </div>
                <div className="col-md-4 form-floating">
                  <input
                    className="form-control"
                    list="Listademarcas"
                    name="marca"
                    id="examplemarcas"
                    onChange={this.handleChange}
                    required
                  />
                  <label for="floatingdatalist" class="form-label text-danger">
                    Escoje la marca de tu veículo
                  </label>
                  <datalist id="Listademarcas">
                    <option value="Alfa Romeo" />
                    <option value="BMW" />
                    <option value="Bugatti" />
                    <option value="Chevrolet" />
                    <option value="Ferrari" />
                    <option value="Ford" />
                    <option value="Jeep" />
                    <option value="Lamborghini" />
                    <option value="Renault" />
                  </datalist>
                </div>
                <div className="col-md-4 form-floating">
                  <input
                    className="form-control"
                    list="Listadetipos"
                    name="tipo"
                    id="exampletipos"
                    onChange={this.handleChange}
                    required
                  />
                  <label for="floatingdatalist" class="form-label text-danger">
                    Escoje el tipo de vehículo
                  </label>
                  <datalist id="Listadetipos">
                    <option value="Sportage" />
                    <option value="Pick Up" />
                    <option value="Sedan" />
                    <option value="Cabinado" />
                    <option value="Carpado" />
                    <option value="Convertible" />
                    <option value="Estacas" />
                  </datalist>
                </div>
                <div className="col-md-4 form-floating">
                  <input
                    className="form-control"
                    list="Listadetransmision"
                    name="transmision"
                    id="exampletransmision"
                    onChange={this.handleChange}
                    required
                  />
                  <label for="floatingdatalist" class="form-label text-danger">
                    Escoje el tipo de transmisión
                  </label>
                  <datalist id="Listadetransmision">
                    <option value="Mecánica" />
                    <option value="Automática" />
                  </datalist>
                </div>
                <div className="col-md-4 form-floating">
                  <input
                    className="form-control"
                    list="Listadecombustible"
                    name="combustible"
                    id="examplecombustible"
                    onChange={this.handleChange}
                    required
                  />
                  <label for="floatingdatalist" class="form-label text-danger">
                    Escoje el tipo de combustible
                  </label>
                  <datalist id="Listadecombustible">
                    <option value="Gasolina" />
                    <option value="Diesel" />
                    <option value="Híbrido" />
                    <option value="Eléctrico" />
                    <option value="Gas-Gasolina" />
                  </datalist>
                </div>
                <div className="col-md-4 form-floating">
                  <input
                    className="form-control"
                    list="Listadepuertas"
                    name="puertas"
                    id="examplePuertas"
                    onChange={this.handleChange}
                    required
                  />
                  <label for="floatingdatalist" class="form-label text-danger">
                    Escoje la cantidad de puertas
                  </label>
                  <datalist id="Listadepuertas">
                    <option value="2" />
                    <option value="3" />
                    <option value="4" />
                    <option value="5" />
                    <option value="6" />
                  </datalist>
                </div>
                <div className="col-md-4 form-floating">
                  <input
                    className="form-control"
                    list="ListadeDireccion"
                    name="direccion"
                    id="exampleDireccion"
                    onChange={this.handleChange}
                    required
                  />
                  <label for="floatingdatalist" class="form-label text-danger">
                    Escoje el tipo de dirección
                  </label>
                  <datalist id="ListadeDireccion">
                    <option value="Mecánica" />
                    <option value="Asistida" />
                    <option value="Electro-asistida" />
                    <option value="Hidráulica" />
                  </datalist>
                </div>
                <div className="col-md-4 form-floating">
                  <div className="form-floating">
                    <label for="floatingInput" ClassName="text-warning">
                      Precio
                    </label>
                    <div className="input-group">
                      <span className="input-group-text" id="inputGroupPrepend">
                        $
                      </span>
                      <input
                        className="form-control"
                        placeholder="precio"
                        id="floatingInput"
                        type="number"
                        name="precio"
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 form-floating">
                  <div className="form-floating">
                    <label for="floatingInput" ClassName="text-warning">
                      Modelo
                    </label>
                    <div className="input-group">
                      <span className="input-group-text" id="inputGroupPrepend">
                        Año
                      </span>
                      <input
                        className="form-control"
                        placeholder="Modelo del vehículo"
                        id="floatingInput"
                        type="number"
                        name="modelo"
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-group">
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile04"
                      aria-describedby="inputGroupFileAddon04"
                      aria-label="Upload"
                      name="imagen"
                      onChange={this.handleChange}
                      required
                    />
                    <button
                      className="btn btn-primary"
                      type="submit"
                      id="inputGroupFileAddon04"
                    >
                      Guardar Cambios
                    </button>
                  </div>
                </div>
              </form>
              <br/>
              <br/>
              <br/>
              <button className=" flex flex-wrap btn btn-warning">
                Crear Tarjeta del Vehículo
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
