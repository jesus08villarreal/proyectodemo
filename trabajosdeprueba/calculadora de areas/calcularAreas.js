var areaCuadrado = document.getElementById("areaDeCuadrado");
var areaTriangulo = document.getElementById("areaDeTriangulo"); 
var areaRectangulo = document.getElementById("areaDeRectangulo");
var areaCirculo = document.getElementById("areaDeCirculo");
var base = document.getElementById("base");
var altura = document.getElementById("altura");
var radio = document.getElementById("radio");
var calcular = document.getElementById("calculrr");
var resultado;
var  selectedOp = alertaPendejo;
var checkTriangle = document.getElementById("areaDeTriangulo");


calcular.addEventListener("click", consolar);


if (checkTriangle.checked = true){
selectedOp = ecuationTriangle;
} else alertaPendejo

function ecuationCuadrado(){
resultado = (base.value*altura.value);
console.log(resultado);

};

function ecuationTriangle(){
    resultado = (base.value*altura.value)/2;
    console.log(resultado);
    
    };
    
function ecuationCircle(){
resultado = Math.PI * (Math.pow(radio.value,2))
console.log(resultado);
};
function alertaPendejo(){
alert("No estas ingresando bien los datos!");
};



function consolar(){
console.log(document);
}
