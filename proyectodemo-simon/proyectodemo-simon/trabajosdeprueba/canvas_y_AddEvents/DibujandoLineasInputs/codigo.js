///obteniendo valores y usando event listener

var lineasIngr = document.getElementById("ingreso_lineas");
var botonEnter = document.getElementById("boton");
botonEnter.addEventListener("click", dibujoporClick);
var d = document.getElementById("drawing");
var lienzo = d.getContext("2d"); 
var ancho = d.clientWidth;
var largo = d.clientHeight;



///////////// lo de abajo son los marcos;;

dibujarLineas(colorcillo, 0, 0, 0, 299);
dibujarLineas(colorcillo, 0, 299, 299, 299); 
dibujarLineas(colorcillo, 0, 0, 300, 1);
dibujarLineas(colorcillo, 300, 0, 300, 300);

//Funciones

function dibujoporClick(){
 var lineas = parseInt(lineasIngr.value);
 var espacios = ancho / lineas;
 var l = 0;
 var yi, xf;
 var colorcillo = "red";
 var yf;
 var xi 
 var xnr, ynr;

  for(l=0; l<lineas; l++){

    yi= espacios * l;
    xf = espacios * (l+1);
    yf = espacios * l;
    xi = espacios * (l+1); 
    xnr = 300 - xf;
    ynr = 300 - xf;

    dibujarLineas(colorcillo, 0, yi, xf, 300);
   
    
    console.log("Lineas" + l)  };

};

// 
function dibujarLineas(colorline, xinicial,yinicial,xfinal,yfinal,){
    
    lienzo.beginPath();
    lienzo.strokeStyle= colorline;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}