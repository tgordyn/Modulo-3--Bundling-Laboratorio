import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.scss";
import logo from "./assets/lemon-logo.png";

const App = () => (
  <div className="container">
    <img src={logo} alt="Lemoncode Logo" className="logo" />
    <h1>Hola Mundo</h1>
    <div className="descriptionCtnr">
      <p>Este es un proyecto con Webpack, TypeScript, React y SASS.</p>
      <p>
        Entorno: <strong>{process.env.APP_ENV}</strong>
      </p>
    </div>
  </div>
);

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
