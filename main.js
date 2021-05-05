//miArray es array que reemplaza una variable y asi poderle asignar muchos valores o diferentes valores guardados en ella.
let miArray = ["Alisa","Amanda","Ana G.","Ana l.","Angie","Clau","Daniela R.","Daniela T.","Eliana","Flor","Gaby","Leo","Inga","Pepi","Maria Laura","Marta","Nicole","Olga","Yeraldin","Ranju","Rosangely","Sonia","Taiza","Yasmin"];
let misegundoArray = [];
const botonhtml = document.getElementById("boton");
const titulo = document.getElementById("titulo");

function changeName() {
    const random = miArray[Math.floor(Math.random() * miArray.length)];
    titulo.innerHTML = random;
    console.log(random);
    if(miArray.length === 0){
        restart();
    }
    changeArray(random);


}
function changeArray(random){

    miArray.splice(random, 1);
    misegundoArray.push(miArray[random]);

}
function prueba(){
    miArray.splice(random, 1);
    misegundoArray.push(random);
}

function restart(){
    miArray = [...misegundoArray];
   misegundoArray = [];
}
botonhtml.addEventListener("click", changeName);
/*let numero = 0;

while ( numero < 10 ){
    numero ++;
    document.write(numero + "<br>");
}*/


