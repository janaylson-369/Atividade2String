//Escreva uma função em Javascript para converter uma string em formato abreviado.
//Exemplo:

function abreviado(nomec) {
    let partes = nomec.split(" ");
    if (partes.length >= 2) {
        return partes[0] + " " + partes[1][0] + ". " + partes[2]+"";
    }
    return nomec;
}
console.log(abreviado("Robin Hood Rhavy"));