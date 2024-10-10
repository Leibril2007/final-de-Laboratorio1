let sec2 = document.createElement('section');
sec2.className = "section2";

let titSec2 = document.createElement('h1');
titSec2.className = "tit-sec2";
titSec2.innerText = "CARACTERÍSTICAS";
sec2.appendChild(titSec2);

let lista = document.createElement('ul');
lista.className = "lista-li";

let viñeta1 = document.createElement('li');
viñeta1.innerText = "Item 1";
lista.appendChild(viñeta1);

let viñeta2 = document.createElement('li');
viñeta2.innerText = "Item 2";
lista.appendChild(viñeta2);

let viñeta3 = document.createElement('li');
viñeta3.innerText = "Item 3";
lista.appendChild(viñeta3);

sec2.appendChild(lista);

export { sec2 }