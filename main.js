//miArray es array que reemplaza una variable y asi poderle asignar muchos valores o diferentes valores guardados en ella.
let miArray = ["Alisa","Amanda","Ana G.","Ana l.","Angie","Clau","Daniela R.","Daniela T.","Eliana","Flor","Gaby","Leo","Inga","Pepi","Maria Laura","Marta","Nicole","Olga","Yeraldin","Ranju","Rosangely","Sonia","Taiza","Yasmin"];
let misegundoArray = [];
const botonhtml = document.getElementById("boton");

function changeName() {
    const random = miArray[Math.floor(Math.random() * miArray.length)];
    document.getElementById("titulo").innerHTML = random;
    console.log(random);
    miArray.splice(miArray.indexOf(random), 1);
    prueba(random);
    document.getElementById("list").innerHTML = misegundoArray, "<br>";
    if(miArray.length ===0){

        restart();

    }

}

function restart(){
    console.log(miArray + "mi array antes de la funcion");
    miArray = misegundoArray;
    console.log(miArray + "mi array despues de la funcion");
    misegundoArray = [];
    console.log(misegundoArray + "mi array ya vacio");
}

function prueba(random) {
    misegundoArray.push(random);
    console.log(misegundoArray);
}

botonhtml.addEventListener("click",changeName);
