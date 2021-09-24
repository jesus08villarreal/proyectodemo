 var d = document.getElementById("canva");
 var lienzo = d.getContext("2d")

 dibujarLineas("green", 100, 100, 300, 300, 3)


var bttn = document.getElementById("bboton");
bttn.addEventListener("click", drawGreenline);
function drawGreenline()  {
console.log("funciona");

};



























 function dibujarLineas(colorline, xinicial,yinicial,xfinal,yfinal,anchoLinea){
    
    lienzo.beginPath();
    lienzo.strokeStyle = colorline;
    lienzo.lineWidth = anchoLinea;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
};
