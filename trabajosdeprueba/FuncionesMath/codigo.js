function crazyNum (min, max){
return Math.floor ( Math.random() * (max - min) + min);
};
// aqui variables
var vi = document.getElementById("villa");
var liezno = vi.getContext("2d");
var dMap = "tile.png";
var dCow = "vaca.png";
var dPig = "cerdo.png";
var dChiken = "pollo.png";
var fondo = new Image();
var pig = new Image();
var cow = new Image();
var chiken = new Image();
var randomAppear;
var randomSelec1;
var randomSelec2;
var randomSelec3;
var randomSelec4;
cwdMin = 80
cwdMax = 420
chiken.src = dChiken;
cow.src = dCow;
pig.src = dPig;
fondo.src= dMap;
////  aqui los randoms


randomAppear=
[crazyNum(cwdMin,cwdMax),crazyNum(cwdMin,cwdMax)
,crazyNum(cwdMin,cwdMax),crazyNum(cwdMin,cwdMax)
,crazyNum(cwdMin,cwdMax),crazyNum(cwdMin,cwdMax)];
randomSelect = crazyNum(1,6)


console.log(randomAppear);
console.log(randomSelec1);



/// aqui funciones y listeners
fondo.addEventListener("load", dibujarMapa);
function dibujarMapa(){
liezno.drawImage(fondo,0,0);
liezno.drawImage(cow, randomAppear[randomSelect],
    randomAppear[randomSelect])
    liezno.drawImage(cow, randomAppear[randomSelect],
        randomAppear[randomSelect])
};

