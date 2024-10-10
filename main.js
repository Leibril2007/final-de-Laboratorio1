import { sec2 } from "./componente/componente_2/componente_2.js";
import { sec1 } from "./componente/componente_1/componente_1.js";

let mainDOM = document.querySelector("#root");

let base = document.createElement('div');
base.className = "basePagina";
base.appendChild(sec1);
base.appendChild(sec2);

mainDOM.appendChild(base);

