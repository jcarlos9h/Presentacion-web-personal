// cree el div contenedor del nombre
let titulo=document.querySelector(".titulo");

let contenedorTitulo=document.createElement("div");
contenedorTitulo.className="header";

titulo.appendChild(contenedorTitulo)

let h1= document.createElement("h1");
    h1.id="titulo";
    contenedorTitulo.appendChild(h1);
        
let contenidoTitulo=document.createTextNode("Juan Carlos Algomeda");
    h1.appendChild(contenidoTitulo);

// crear contenido de datos personales   
document.querySelector(".dp").innerHTML="DATOS PERSONALES"; 
document.querySelector(".nombre").innerHTML="Juan Carlos Algomeda";
document.querySelector(".direccion").innerHTML="Ciudad Autonoma de Buenos Aires";
document.querySelector(".phone").innerHTML="1163090865";
document.querySelector(".mail").innerHTML="algomeda@gmail.com";

//crear contenido de las otras dos secciones
document.querySelector(".intereses").innerHTML="Intereses";
document.querySelector(".idiomas").innerHTML="Idiomas"