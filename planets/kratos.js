function mialerta (){
    alert ("Pasos: Ingresa el mensaje- Apreta decifrar- y listo!!");
}
const alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "]
const guiones = [",",";","-","_","*","¿","?","!","#","/",">","+","-",":","=",".","[","{","]","}","&","°"]
const numeros = ["1","2","3","4","5","6","7","8","9","10"]
function cifrar (){
    let palabra = document.getElementById("msg").value;
    //console.log(palabra);
    let palabra_codificada = btoa(palabra);
    //console.log(palabra_codificada);
    document.getElementById("msg1").value = palabra_codificada;
}
function decifrar(){
    let palabra = document.getElementById("msg1").value;
    console.log(palabra);
    let palabra_descodificada = atob(palabra);
    console.log(palabra_descodificada);
    document.getElementById("msg").value = palabra_descodificada;
}

document.getElementById("butn").addEventListener("click",function(){
    mialerta();
    cifrar();
    document.getElementById("msg").value ="";
})

document.getElementById("botnes").addEventListener("click",function(){
    mialerta();
    decifrar();
    document.getElementById("msg1").value ="";
})


