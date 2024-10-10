import { sec1 } from "./componente/componente_1/componente_1.js";

let mainDOM = document.querySelector("#root");

let base = document.createElement('div');
base.className = "basePagina";
base.appendChild(sec1);

mainDOM.appendChild(base);

