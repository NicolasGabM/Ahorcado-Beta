/*Proyecto: Juego del ahoracado
Variables 
*/
var palabras=["CALESITA","PERROS","AUTO","MUNDO","SELECTOR","MEMORIA","ESCALERA"]
var incorrectas =[]
var incognita = ""
var lineas = ""
var display = document.getElementById("Display")
var canvas = document.getElementById("Ahorcado")
var ctx = canvas.getContext('2d');
var displayLetras = document.getElementById("DisplayLetras")
let aciertos = 0
var limite =["A","B","C","D","E","F","G","H","I","J","K","M","N","L","O","P","Q","R","S","T","U","V","w","x","y","Z"]

//Funciones 
String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function palabraSecreta(x){
    incognita = palabras[Math.floor(Math.random()*x.length)]
    console.log(incognita)
    return incognita 
}

function lineasPalabra(){
    for (i = 0; i<incognita.length;i++){
        lineas +="_ "    
    }
    for (x in lineas){
        console.log(x)
    }
    display.innerHTML=lineas
}
function dibujarCuerpo(contador){

    
}

document.onkeydown =(ee)=>{
    let letra = ee.key.toUpperCase();
    let indice = incognita.indexOf(letra)
    console.log(letra)
    if (limite.includes(letra)&&lineas.includes(letra)==false){
        for(const i in incognita){
            if(letra == incognita[i]){
                lineas = lineas.replaceAt(i*2,letra)
                console.log(lineas)
                display.innerHTML=lineas
                aciertos ++
            }
        }
        if(indice==-1 && incorrectas.includes(letra)===false){
            incorrectas.push(letra)
            console.log("cant: ",incorrectas.length)
            displayLetras.innerHTML += letra+"-"
            switch (incorrectas.length) {
                case 0:
                    ctx.strokeStyle = "black";
                    ctx.moveTo(20, 250);
                    ctx.lineTo(100, 250);
                    ctx.stroke();
                    break;
                case 1:
                    ctx.moveTo(100, 560);
                    ctx.lineTo(100, 30);
                    ctx.stroke();
                    break;
                case 2:
                    ctx.moveTo(350, 30);
                    ctx.lineTo(100, 30);
                    ctx.stroke();
                    break;
                case 3:
                    ctx.moveTo(350, 70);
                    ctx.lineTo(350, 30);
                    ctx.stroke();
                    break;
                case 4:
                    ctx.beginPath();
                    ctx.arc(350, 100, 31.4, 0, Math.PI * 2, false);
                    ctx.stroke();
                    break;
                case 5:
                    
                    ctx.moveTo(350, 130);
                    ctx.lineTo(350, 300);
                    ctx.stroke();
                    break;
                case 6:
                    ctx.moveTo(300, 200);
                    ctx.lineTo(350, 150);
                    ctx.moveTo(300, 350);
                    ctx.lineTo(350, 300);
                    ctx.stroke();
                    break;
                case 7:
                    ctx.moveTo(400, 200);
                    ctx.lineTo(350, 150);
                    ctx.moveTo(400, 350);
                    ctx.lineTo(350, 300);
                    ctx.stroke();
                    break;
                    
            
            }
        }
    }
    if (incorrectas.length==7){
        alert("Perdiste :c, la palabra era "+incognita)
        window.location.href="index.html"
     }
    else if(incognita.length==aciertos){
        alert("Ganaste, felicitaciones!! adivinaste la palabra "+incognita)
    }
}



palabraSecreta(palabras)
lineasPalabra()
console.log(incognita)