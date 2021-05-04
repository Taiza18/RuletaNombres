//miArray es array que reemplaza una variable y asi poderle asignar muchos valores o diferentes valores guardados en ella.
let miArray = ["Alisa","Amanda","Ana G.","Ana l.","Angie","Clau","Daniela R.","Daniela T.","Eliana","Flor","Gaby","Leo","Inga","Pepi","Maria Laura","Marta","Nicole","Olga","Yeraldin","Ranju","Rosangely","Sonia","Taiza","Yasmin"];
let misegundoArray = [];
const botonhtml = document.getElementById("boton");

function changeName(){
    const random = Math.floor(Math.random() * miArray.length);
    document.getElementById("titulo").innerHTML = miArray[random];
    miArray.splice(random, 1);
    misegundoArray.push(miArray[random]);
    if(miArray.length === 0){
        restart();
            }
}
function restart(){
   miArray = misegundoArray;
   misegundoArray = [];

}

botonhtml.addEventListener("click", changeName);
/*let numero = 0;

while ( numero < 10 ){
    numero ++;
    document.write(numero + "<br>");
}*/


