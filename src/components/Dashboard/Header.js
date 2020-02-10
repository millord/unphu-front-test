import React from "react";
import { Redirect } from "react-router-dom";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return null;
  }
};

class Header extends React.Component {
  state = {
    redirect: false
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
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light navbar-expand-lg">
          <a href="#" className="navbar-brand">
            Unphu Test Site
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="navbar-item">
                <a className="nav-link" href="#">
                  Inicio
                </a>
              </li>
              <li className="navbar-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="navbar-item">
                <a className="nav-link" href="#">
                  Acerca
                </a>
              </li>
              <li className="navbar-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
            {this.renderRedirect()}
            <a onClick={this.setRedirect} className="nav-link " href="/">
              <i class="fa fa-user-circle-o" aria-hidden="true" fa-5x></i>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
