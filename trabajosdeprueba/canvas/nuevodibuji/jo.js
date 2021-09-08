 var d = document.getElementById("tibujo");
 var lienzo = d.getContext("2d");


 function dibujar_linea(colorin, xinicial, yinicial, xfinal, yfinal)
 {
 lienzo.beginPath();
 lienzo.strokeStyle = colorin;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();
 };

 dibujar_linea("red", 100, 100, 200, 200);

 
