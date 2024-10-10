let sec1 = document.createElement('section');
sec1.className = "section1";

let titSec1 = document.createElement('h1');
titSec1.className = "tit-sec1";
titSec1.innerText = "COMPONENTE 1";
sec1.appendChild(titSec1);

let imgS1 = document.createElement('img');
imgS1.className = "imgS1";
imgS1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZxCzVMXtjhRH9OqsHWgbXl95S6HAnYPVft1YJ1zkQYGYT197u8dzXg8OYcFdUWWi-u0&usqp=CAU";
sec1.appendChild(imgS1);

let descripcion = document.createElement('p');
descripcion.className = "pS1";
descripcion.innerText = "Descripción del componente";
sec1.appendChild(descripcion);


export { sec1 }
