let sec3 = document.createElement('section');
sec3.className = "section3";

let titSec3 = document.createElement('h1');
titSec3.className = "tit-sec3";
titSec3.innerText = "CONTACTO";
sec3.appendChild(titSec3);

let input = document.createElement('textarea');
input.className = "textArea";
input.innerText = "Mensaje:";
sec3.appendChild(input);

let divBtn = document.createElement('div');
divBtn.className = "div-btn";

let btn = document.createElement('div');
btn.className = "btn-s3";
btn.innerText = "Enviar";

divBtn.appendChild(btn);

sec3.appendChild(divBtn);


export { sec3 }