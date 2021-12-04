import React from "react";

export default class ProductCreate extends React.Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-4">
              <div class="card text-center">
                <div class="card-header">Featured</div>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <div class="card-footer text-muted">2 days ago</div>
              </div>
            </div>
            <div class="col-8">
              <form class="row g-3">
                <div class="col-md-4 form-floating">
                  <input
                    class="form-control"
                    list="datalistOptions"
                    id="exampleDataList"
                  />
                  <label for="floatingdatalist" class="form-label text-danger">
                  Escoje la marca de tu veículo
                  </label>
                  <datalist id="datalistOptions">
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
                <div class="col-md-4 form-floating">
                  <input
                    class="form-control"
                    list="datalistOptions"
                    id="exampleDataList"
                  />
                  <label for="floatingdatalist" class="form-label text-danger">
                  Escoje el tipo de vehículo
                  </label>
                  <datalist id="datalistOptions">
                    <option value="Sportage" />
                    <option value="Pick Up" />
                    <option value="Sedan" />
                    <option value="Cabinado" />
                    <option value="Carpado" />
                    <option value="Convertible" />
                    <option value="Estacas" />
                  </datalist>
                </div>
                <div class="col-8">
                  <div class="input-group">
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile04"
                      aria-describedby="inputGroupFileAddon04"
                      aria-label="Upload"
                    />
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      id="inputGroupFileAddon04"
                    >
                      Remover
                    </button>
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      id="inputGroupFileAddon04"
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
