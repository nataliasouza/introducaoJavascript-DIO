function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigada por clicar";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
    window.open("https://digitalinnovation.one/");
    //window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigada por passar o mouse";
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página Carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}

//Aula 04 - Desenvolva páginas web com javascript
/*
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
console.log(validaIdade(idade));*/


