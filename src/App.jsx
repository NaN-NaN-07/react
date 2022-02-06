
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './pages/home-page';
import TablaProv from './componentes/tablaProv';
import AddForm from "./componentes/Agregar";

function App() {
  return (
    <Router>
      <div className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/proveedores">Proveedores</Link>
            </li>
            <li>
              <Link to="/add">Agregar Proveedor</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/proveedores">
            <TablaProv/>
          </Route>
          <Route path="/add">
            <AddForm/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
