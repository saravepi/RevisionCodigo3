// Tenemos un lista de productos

// Cambie imagenes
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "assets/img/zapato-negro.jpg"}, // Se cambio el nombre de las imagenes, en zapato negro aparecia color azul
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "assets/img/zapato-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "assets/img/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "assets/img/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "assets/img/zapato-rojo.jpg"}
]

// En el html se le asignó un Id por ello se le debe de llamar con Id
const listaProductos = document.getElementById("lista-de-productos") // se cambio el nombre de la variable para mayor legibilidad
const input = document.querySelector('.input'); // se cambio el nombre de la variable para mayor legibilidad

/*Se tiene que agregar una funcion, en este caso utilizamos una arrow function 
para que se creen elementos y así mostrar los prodcutos disponibles */

const mostrarProductos = (productos) => {
for (let i = 0; i < productos.length; i++) {
  let div = document.createElement("div") // Cambiamos la froma de declarar variables (de var a let) y cambio de nombre de la variable por "div" para mayor legibilidad
  div.classList.add("producto") 

  let titulo = document.createElement("p") // Cambiamos la froma de declarar variables (de var a let) y cambio de nombre de la variable por "titulo" para mayor legibilidad
  titulo.classList.add("titulo")
  titulo.textContent = productos[i].nombre
  
  let imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  div.appendChild(titulo)
  div.appendChild(imagen)

  listaProductos.appendChild(div)
}

}

mostrarProductos(productos)
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() { // Se le asigna una funcion al evento "onclick" 
  while (listaProductos.firstChild) {
    listaProductos.removeChild(listaProductos.firstChild);
  }

  const texto = input.value; // Se sustituye "$i" por "input" para su correcto funcionamiento.  
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    let div = document.createElement("div")
    div.classList.add("producto")
  
    let titulo = document.createElement("p")
    titulo.classList.add("titulo")
    titulo.textContent = productosFiltrados[i].nombre
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    div.appendChild(titulo)
    div.appendChild(imagen)
  
    listaProductos.appendChild(div)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  