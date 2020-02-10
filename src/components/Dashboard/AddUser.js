import React from "react";
import { Redirect } from "react-router-dom";

class AddUser extends React.Component {
  state = {
    nombres: "",
    primerApellido: "",
    segundoApellido: "",
    cedula: null,
    edad: null,
    genero: "",
    direccion: "",
    email: "",
    estadoCivil: "",
    hijos: false,
    fechaNacimiento: null,
    redirect: false
  };
  handleChange = e => {
    console.log(e);
  };
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    const LoginForm = () => {
      return (
        <form>
          <div className="form-group">
            <label className="text-muted">Nombres</label>
            <input
              onChange={this.handleChange("nombres")}
              type="text"
              className="form-control"
              value={this.nombres}
              required
            />
          </div>
          <div className="form-group">
            <label className="text-muted">Primer Apellido</label>
            <input
              onChange={this.handleChange("primerApellido")}
              type="text"
              className="form-control"
              value={this.primerApellido}
              required
            />
          </div>
          <div className="form-group">
            <label className="text-muted">Segundo Apellido</label>
            <input
              onChange={this.handleChange("segundoApellido")}
              type="text"
              className="form-control"
              value={this.primerApellido}
              required
            />
            <label className="text-muted">Cedula</label>
            <input
              onChange={this.handleChange("segundoApellido")}
              type="number"
              className="form-control"
              value={this.cedula}
              required
            />
            <label className="text-muted">Edad</label>
            <input
              onChange={this.handleChange("segundoApellido")}
              type="number"
              className="form-control"
              value={this.edad}
              required
            />
            <label className="text-muted">Genero</label>
            <input
              onChange={this.handleChange("genero")}
              type="radio"
              className="form-control"
              value={this.genero}
              required
            />
            <label className="text-muted">Genero</label>
            <input
              onChange={this.handleChange("genero")}
              type="radio"
              className="form-control"
              value={this.genero}
              required
            />
          </div>
          {this.renderRedirect()}
          <button onClick={this.setRedirect} className="btn btn-primary">
            Submit
          </button>
        </form>
      );
    };
    return (
      <div className="container">
        <h4>Registro de Usuario</h4>
        {LoginForm()}
      </div>
    );
  }
}

export default AddUser;
