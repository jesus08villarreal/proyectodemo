var d = document.getElementById("drawing");
var lienzo = d.getContext("2d");
var teclas = {UP:38 ,RIGHT:39 , DOWN:40 ,LEFT:37, GREEN: 71, RED: 82, BLUE:66, ERASER:69, MAS: 107, MENOS:109};
var y = 150;
var x = 150;
var coloresdolores;
var anchoDeLinea = 3; ///PARA INTERCALAR VARIABLES ENTRE FUNCIONES Y QUE ESTAS SEAN APLICADAS-
                      /// -DEBES DEFINIR LAS VARIABLES PRIMERO.

var colorChange = document.getElementById("colorchanger");
var applyColor = document.getElementById("applyColor");
applyColor.addEventListener("click", CambiarColorete);
function CambiarColorete(){
  coloresdolores = colorChange.value;
}


document.addEventListener("keydown", cambiarAncho);
function cambiarAncho(eventwo){
  console.log(eventwo);
  var lineaMASMENOS = 2;
if (eventwo.keyCode == teclas.MAS){
  anchoDeLinea = anchoDeLinea + lineaMASMENOS;
   };
   if (eventwo.keyCode == teclas.MENOS){
    anchoDeLinea = anchoDeLinea - lineaMASMENOS;
     };
     if (eventwo.keyCode == teclas.ERASER){
      coloresdolores = "white"
       };
};


document.addEventListener("keydown", dibujarTeclado);
function dibujarTeclado(evento)
{
  coloricito = coloresdolores  
var movimineto = 3;

switch(evento.keyCode){
          
          case teclas.UP:
            dibujarLineas(coloricito, x, y, x, y - movimineto);
            y = y - movimineto;
              break
           case teclas.RIGHT:
            dibujarLineas(coloricito, x, y, x + movimineto, y);
            x = x + movimineto;
               break
            case teclas.DOWN:
            dibujarLineas(coloricito, x, y, x, y + movimineto);
            y = y + movimineto;
                break
             case teclas.LEFT:
                dibujarLineas(coloricito, x, y, x - movimineto, y);
                x = x - movimineto
                 break
          
        };
 };

function dibujarLineas(colorline, xinicial,yinicial,xfinal,yfinal,){
    anchoDeLinea = anchoDeLinea
    lienzo.beginPath();
    lienzo.strokeStyle = colorline;
    lienzo.lineWidth = anchoDeLinea;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
};