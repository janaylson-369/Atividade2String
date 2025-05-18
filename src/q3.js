//Escreva uma função em Javascript para dividir uma string através dos
// espaços vazios e convertê-la em um array de palavras.
function splitString(str) {
    return str.split(' ');
}

console.log(splitString("teste ola meu nobre")); // [ 'teste', 'ola', 'meu', 'nobre' ]
