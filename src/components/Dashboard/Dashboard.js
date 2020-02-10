import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const adminLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">Acciones</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/create/user">
              Agregar Usuario
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/user/list">
              Lista de Usuarios
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item"> hola administrador</li>
          <li className="list-group-item"> admintest@gmail.com</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="container">
      <span>Bienvenid@</span>

      <span className="glyphicon glyphicon-user"></span>
      <div className="row">
        <div className="col-3">{adminLinks()}</div>
        <div className="col-9">{adminInfo()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
