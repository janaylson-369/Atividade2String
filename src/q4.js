//Escreva uma função em Javascript para recortar um número
// especificado de caracteres de uma String partindo sempre do início.
function recorteString(str, num) {
    return str.substring(0, num);
}

console.log(recorteString("Round Six Robin", 9)); // Round Six
