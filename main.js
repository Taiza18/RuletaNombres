//miArray es array que reemplaza una variable y asi poderle asignar muchos valores o diferentes valores guardados en ella.
const miArray = ["Alisa","Amanda","Ana G.","Ana l.","Angie","Clau","Daniela R.","Daniela T.","Eliana","Flor","Gaby","Leo","Inga","Pepi","Maria Laura","Marta","Nicole","Olga","Yeraldin","Ranju","Rosangely","Sonia","Taiza","Yasmin"];

const botonhtml = document.getElementById("boton");

function changeName(){
    const random = Math.floor(Math.random() * miArray.length);
    document.getElementById("titulo").innerHTML = miArray[random];
}

botonhtml.addEventListener("click", changeName);




