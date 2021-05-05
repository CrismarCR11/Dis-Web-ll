//declaracion de variables

var ContenidoIsecionRegistro=document.querySelector(".contenido-Isecion-Registro");
var formularioLogin=document.querySelector(".formulario-login");
var formularioRegistro=document.querySelector(".formulario-Registro");
var contenidoFondoIsecion=document.querySelector(".contenido-fondo-Isecion");
var contenidoFondoRegistro=document.querySelector(".contenido-fondo-Registro");

// funcion movimiento en botones de registro y Inicio de Secion

document.getElementById("bt-Registro").addEventListener("click", registro);
document.getElementById("bt-Isecion").addEventListener("click",Isecion);
window.addEventListener("resize",AnchoPagina);

function Isecion(){
    if(window.innerWidth>850){
        formularioRegistro.style.display="none";
        ContenidoIsecionRegistro.style.left="10px";
        formularioLogin.style.display="block";
        contenidoFondoRegistro.style.opacity="1";
        contenidoFondoIsecion.style.opacity="0";
    }else{
        formularioRegistro.style.display="none";
        ContenidoIsecionRegistro.style.left="0px";
        formularioLogin.style.display="block";
        contenidoFondoRegistro.style.display="block";
        contenidoFondoIsecion.style.display="none";
    }
}

function registro(){
    if(window.innerWidth>850){
        formularioRegistro.style.display="block";
        ContenidoIsecionRegistro.style.left="410px";
        formularioLogin.style.display="none";
        contenidoFondoRegistro.style.opacity="0";
        contenidoFondoIsecion.style.opacity="1";    
    }else{
        formularioRegistro.style.display="block";
        ContenidoIsecionRegistro.style.left="0px";
        formularioLogin.style.display="none";
        contenidoFondoRegistro.style.display="none";
        contenidoFondoIsecion.style.display="block";
        contenidoFondoIsecion.style.opacity="1"; 
    }
}

function AnchoPagina(){
    if(window.innerWidth>850){
        contenidoFondoIsecion.style.display="block";
        contenidoFondoRegistro.style.display="block";
    }else{
        contenidoFondoRegistro.style.display="block";
        contenidoFondoRegistro.style.opacity="1";
        contenidoFondoIsecion.style.display="none";
        formularioLogin.style.display="block"
        formularioRegistro.style.display="none";
        ContenidoIsecionRegistro.style.left="0px";
    }
}
AnchoPagina();