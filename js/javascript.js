// cree el div contenedor del nombre

let contenedorTitulo=document.createElement("div");
contenedorTitulo.className="header";

document.body.appendChild(contenedorTitulo)

let h1= document.createElement("h1");
    h1.id="titulo";
    contenedorTitulo.appendChild(h1);
        
let contenidoTitulo=document.createTextNode("Juan Carlos Algomeda");
    h1.appendChild(contenidoTitulo);

// cree el div contenedor de las dos columnas

let  contenedor=  document.createElement("div");
    contenedor.className="contenedor";

    document.body.appendChild(contenedor);

//haciendo los dos div principales de la col1 
let columna1=document.querySelector(".contenedor");

let contenedorUno=document.createElement("div");
    contenedorUno.className="cont-1";
    
    columna1.appendChild(contenedorUno);

    //contenido de la columna 1
     let imagen=document.querySelector(".cont-1");

      let  imgPerfil=document.createElement("img");
           imgPerfil.className="img";
           imgPerfil.id="imagen";
           imgPerfil.src='/img/IMG_20210626_002243_100.jpg';
           imagen.appendChild(imgPerfil)
    

    // creando div principal de la col2
    let columna2=document.querySelector(".contenedor");

    let contenedorDos=document.createElement("div");
        contenedorDos.className="cont-2";

        columna2.appendChild(contenedorDos);