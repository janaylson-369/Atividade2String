//Escreva uma função em Javascript para verificar se uma variável é do tipo
// String ou não.

function String(valor) {

    if (typeof valor === 'string') {    
        return true;
    } else {
        return false;
    }
}

// Exemplos de uso:
console.log(String( "ola")); // true
console.log(String(123));  // false
