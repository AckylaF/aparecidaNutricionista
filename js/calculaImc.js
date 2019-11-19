var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"


var pacientes = document.querySelectorAll(".paciente");


for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var infoImc = paciente.querySelector(".info-imc");

    
    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    if(!pesoEhValido){
        infoImc.textContent = "Peso inválido";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }
    if(!validaAltura){
        infoImc.textContent = "Altura inválida";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }
    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso, altura);
        infoImc.textContent = imc;
    } 
}
function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return(imc.toFixed(2));
}
function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}
function validaAltura(altura){
    if(altura >= 0 && altura < 3){
        return true;
    }else{
        return false;
    }
}