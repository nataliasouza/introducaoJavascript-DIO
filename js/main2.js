//Aula 04 - Desenvolva páginas web com javascript

function soma(n1, n2) {
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade");
console.log(validaIdade(idade));


