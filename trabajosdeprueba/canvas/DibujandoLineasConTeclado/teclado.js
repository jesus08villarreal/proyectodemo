var d = document.getElementById("drawing");
var lienzo = d.getContext("2d");
var teclas = {UP:38 ,RIGHT:39 , DOWN:40 ,LEFT:37};
var y = 150;
var x = 150;
var colorline;











document.addEventListener("keydown", dibujarTeclado);
function dibujarTeclado(evento)
{
    var movimineto = 3;
coloricito = "blue";
 switch(evento.keyCode){
          case teclas.UP + teclas.RIGHT:
            dibujarLineas(coloricito, x, y, x, y - movimineto);
            y = y - movimineto;
            dibujarLineas(coloricito, x, y, x + movimineto, y);
            x = x + movimineto;
          break
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
    
    lienzo.beginPath();
    lienzo.strokeStyle = colorline;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}