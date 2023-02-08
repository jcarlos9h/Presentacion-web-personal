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
document.querySelector(".redes").innerHTML="Redes Sociales"

//crear contenido de las otras dos secciones

let  conIntereses=document.getElementById("col-1");

let intereses=document.createElement("h2")
    intereses.className="interes";

    conIntereses.appendChild(intereses);

    document.querySelector(".interes").innerHTML="Intereses";

    let contPuno=document.getElementById("col-1");
    let parrafoUno=document.createElement("p");
        parrafoUno.className="p1";
        contPuno.appendChild(parrafoUno);
        document.querySelector(".p1").innerHTML="futbol";

    let contPaDos=document.getElementById("col-1");
    let parrafoDos=document.createElement("p");
        parrafoDos.className="p2";
        contPaDos.appendChild(parrafoDos);
        document.querySelector(".p2").innerHTML="Programacion"; 
        
    let contPaTres=document.getElementById("col-1");
    let parrafoTres=document.createElement("p");
        parrafoTres.className="p3";
        contPaTres.appendChild(parrafoTres);
        document.querySelector(".p3").innerHTML="Leer";      

        // contenedor de Idiomas

    let contIdiomas=document.getElementById("col-1");

    let idiomas=document.createElement("h2");
        idiomas.className="idiomas";

        contIdiomas.appendChild(idiomas);

        document.querySelector(".idiomas").innerHTML="Idiomas";

        let conPaIngles=document.getElementById("col-1");
        let paIngles=document.createElement("p");
            paIngles.className="pi";

            conPaIngles.appendChild(paIngles);
            document.querySelector(".pi").innerHTML="Ingles: Basico ";

        let conPaEspañol=document.getElementById("col-1");
        let paEspañol=document.createElement("p");
            paEspañol.className="pe";

            conPaEspañol.appendChild(paEspañol);
            document.querySelector(".pe").innerHTML="Español: Nativo";

//contenido de la columna 2 

document.querySelector(".sobreMi").innerHTML=
"Mi nombre es Juan carlos Algomeda, de nacionalidad Venezolana, graduado en Tecnico Superior Univrsitario en Administracion de empresas, comenzé a Estudiar programacion llegado a la Argentina, joven proactivo, con ganas de aprender, y en busca de la primera oportunidad  de un trabajo en el area de la programacion, he realizado diferentes cursos, el mas reciente, Desarrollador full Stack de Java, en el programa CodoaCodo del Gobierno de la ciudad."

document.querySelector(".expLaboral").innerHTML="Experiencia Laboral";

// creo seccion de empleos realizados

let contExLab=document.querySelector(".col2");
    let priTrabajo=document.createElement("h3");
        priTrabajo.className="pTra";

      contExLab.appendChild(priTrabajo);
      document.querySelector(".pTra").innerHTML="Operario Nivel 2  ( 2019, atualidad)" ;

      let conReyGoma=document.querySelector(".col2");
      let traReyGoma=document.createElement("p");
          traReyGoma.id="rg";

          conReyGoma.appendChild(traReyGoma);
          document.getElementById("rg").innerHTML="Actualmente trabajo como operario en Rey Goma S.R.l., Desempeñando el cargo de operario, el cual tiene diversas funciones, como embalaje de mercaderias, control de productos, embasado y empaquetado de productos, despacho de mercaderia, y atencion al cliente, sin personal a cargo"



      // opcion Segundo trabajo 

      let contExLab2=document.querySelector(".col2");
    let secTrabajo=document.createElement("h3");
        secTrabajo.className="sTra";

      contExLab2.appendChild(secTrabajo);
      document.querySelector(".sTra").innerHTML="Mozo, Heladero (2018-2019) ";

      let conWhoopies=document.querySelector(".col2");
      let trawhoopies=document.createElement("p");
          trawhoopies.id="wh";

          conWhoopies.appendChild(trawhoopies);
          document.getElementById("wh").innerHTML="Trabaje Desempeñando la funcion de mozo, desde finales del 2018, hasta mitad del 2019, desempeñe tareas como: Preparacion de alimentos , bebidas, atencion al publico, limpieza general, y algunas tareas administrativas entre otras";

          //columna formacion Academica
    let conForAcad=document.querySelector(".col2");
        forAcademica=document.createElement("h2");
        forAcademica.id="fa";

        conForAcad.appendChild(forAcademica).innerHTML="Formacion Academica";

        let conCoACo=document.querySelector(".col2");
        let cursoCaC=document.createElement("h3");
            cursoCaC.className="cac";
    
          conCoACo.appendChild(cursoCaC);
          document.querySelector(".cac").innerHTML="Desarrollador Full Stack Java   ( Agosto 2022 )";

          let conCodoaCodo=document.querySelector(".col2");
          let cursoCodoaCodo=document.createElement("p");
              cursoCodoaCodo.id="cac";

              conCodoaCodo.appendChild(cursoCodoaCodo).innerHTML=" Actualmente cursando el curso de Desarrollador web Full Stack de Java, dictado por el Gobierno de la Ciudad, aprendiendo lenguajes del frontend como HTML, CSS, JAVASCRIPT, frameworks como: BOOTSTRAP entre otros, y la parte del desarrollo del Backend, trabajando bases de datos con MySql y JAVA ";
        
//  curso de etical hacking

let conEh=document.querySelector(".col2");
        let cursoEtH=document.createElement("h3");
            cursoEtH.className="eh";
    
          conEh.appendChild(cursoEtH);
          document.querySelector(".eh").innerHTML="Experto Universitario en Hacking Ético (Ethical Hacking), Mayo 2021";

          let conEticalh=document.querySelector(".col2");
          let cursoEticalh=document.createElement("p");
              cursoEticalh.className="etical";
               
        conEticalh.appendChild(cursoEticalh). innerHTML="Desarrollado en la <b> Universidad Tecnologica Nacional Facultad Regional Buenos Aires (U.T.N.) </b>, abarcando diferentes temas referentes a Redes, Seguridad Informatica, Pentesting, Hacking Etico, con una duracion de 6 meses."
                        
// Admnistrador de linux

let conLinux=document.querySelector(".col2");
        let cursoLinux=document.createElement("h3");
            cursoLinux.className="al";
    
          conLinux.appendChild(cursoLinux);
          document.querySelector(".al").innerHTML="LPCI-1 Administrador de Linux";

          let conAdLinux=document.querySelector(".col2");
          let cursoAdLinux=document.createElement("p");
              cursoAdLinux.id="linux";

              conAdLinux.appendChild(cursoAdLinux). innerHTML=" Curso de Administrador de Linux, manejando temas como: directorios, permisos, LVM, Particiones, Permisos de Usuarios, grupos, editor vim entre otros, realizado en Diciembre de 2021, en la plataforma virtual de Educacion de <b>UDEMY</b>  "

              //Tsu Administracion 
    let conAdm=document.querySelector(".col2");
    let tituloTsu=document.createElement("h3");
        tituloTsu.className="tsu";

        conAdm.appendChild(tituloTsu).innerHTML="Tecnico Superiro Universitario Administracion de Empresas";

        let conAdmin=document.querySelector(".col2");
          let tsuAdmin=document.createElement("p");
              tsuAdmin.id="admintsu";

              conAdmin.appendChild(tsuAdmin). innerHTML="Egresado de la <b> Universidad Politecnica Juan de Jesus Montilla</b> (Venezuela), en mencion: TECNICO SUPERIOR UNIVERSITARIO, en el año 2016"


// seccion otras Habilidades 

let  tituloOtrasHab=document.querySelector(".col2");
let conOtras=document.createElement("h2");
    conOtras.className="otrash";

    tituloOtrasHab.appendChild(conOtras).innerHTML="Otras Habilidades"
// creamos la lista ul
    let contOtrasHab=document.querySelector(".col2");
    let listaOtras=document.createElement("ul");
        listaOtras.className="lista";

        contOtrasHab.appendChild(listaOtras);
// creamos elementos de la lista.
    let  conpunto1=document.querySelector(".lista") ;
    let punto1=document.createElement("li");
        
        conpunto1.appendChild(punto1).innerHTML="Microsoft Office: usuario intermedio.";
//

let  conpunto2=document.querySelector(".lista") ;
let punto2=document.createElement("li");
    
    conpunto2.appendChild(punto2).innerHTML="Sistema operativo linux: Intermedio";

    //

    let  conpunto3=document.querySelector(".lista") ;
let punto3=document.createElement("li");
    
    conpunto3.appendChild(punto3).innerHTML="Seguridad informatica"
    //
    let  conpunto4=document.querySelector(".lista") ;
    let punto4=document.createElement("li");
        
        conpunto4.appendChild(punto4).innerHTML="Redes";

        //

    let  conpunto5=document.querySelector(".lista") ;
    let punto5=document.createElement("li");
            
            conpunto5.appendChild(punto4).innerHTML="Auditorias";

 //
 let  conpunto6=document.querySelector(".lista") ;
 let punto6=document.createElement("li");
         
         conpunto6.appendChild(punto6).innerHTML="Trabajo en Equipo"
         
   //
   
   let  conpunto7=document.querySelector(".lista") ;
   let punto7=document.createElement("li");
           
           conpunto5.appendChild(punto7).innerHTML="Liderazgo";

    let conDatosInteres=document.querySelector(".col2");
    let datosInteres=document.createElement("h2");
        datosInteres.className="di";

        conDatosInteres.appendChild(datosInteres).innerHTML="Otros Datos De interes";

    let conPaDaIn=document.querySelector(".col2");
    let paDaIn=document.createElement("p");
        paDaIn.id="paOtro";
        
    conPaDaIn.appendChild(paDaIn).innerHTML="Joven proactivo con deseos de empezar en el area de la programacion y la seguridad informatica, no tengo experiencia laboral en este rubro mas que la que he logrado aprender por mi propia cuenta, estudie Administracion de empresas en Venezuela hasta llegar a T.S.U Adm. De empresas, que vendria hacer algo asi como la mitad de una carrera universitaria. viviendo aca en buenos aires argentina, desde finales del año 2018, trabaje en una heladeria y estoy ahora en una fabrica de autopartes de autos. Estoy buscando una oportunidad de empleo de analista jr de seguridad informatica, o que este relacionado con el ambito del pentesting, redes, hacking, entre otros. Acabo de finalizar un curso de ethical Hacking, en la U.T.N. Buenos aires, tengo pensado empezar a estudiar lo mas pronto una carrera de informatica, y realizar algun que otro curso para adquirir mas conocimientos en el area de los lenguajes de JAVA, PHP, PHYTON, etc, ya que es eso lo que me apasiona y no me molestaria trabajarlo el resto de mi vida, soy muy entusiasta, alegre, de muy buena comunicación y muy colaborador en mis areas de trabajo, asi que de verdad le agradeceria mucho una oportunidad, gracias.";

    
    let contDivFooter=document.querySelector("body");
     let divfooter=document.createElement("div");
            divfooter.className="footer";
            
            contDivFooter.appendChild(divfooter);

     let contFooter=document.querySelector(".footer");
          footer=document.createElement("footer");
          footer.className="pie";
          
          contFooter.appendChild(footer);

    let paFooter=document.querySelector(".pie");
    let parrafoFooter=document.createElement("p"); 
        parrafoFooter.className="parrafoPie";

        paFooter.appendChild(parrafoFooter).innerHTML=" &copy;Juan Carlos Algomeda  22030,  Esta informacion es personal y cualquier uso sin previa autorizacion del propietario esta prohibida "


