//Escreva uma função em Javascript para verificar se uma String está em branco ou vazia ou não.
function stringembranco(str) {
    if (str === "") {
        return true;
    }
    else {
        return false
         }
    }

//return str.trim() === '';
console.log(stringembranco("")); // true
console.log(stringembranco("kakkakaka")); // false

// segundo exemplo de codigo 
function stringembranco(str) {
    return str.trim() === '';

}
console.log(stringembranco("")); // true
console.log(stringembranco("kakkakaka")); // false
