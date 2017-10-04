var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll(".paciente");

for(var i=0; i < paciente.length; i++) {
	

	var peso = paciente[i].querySelector(".info-peso");
	
	var altura = paciente[i].querySelector(".info-altura");
	var novoImc = paciente[i].querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso.textContent);
	var alturaEhValida = validaAltura(altura.textContent);

	if(!pesoEhValido) {
		console.log("Peso Inválido");
		pesoEhValido = false;
		novoImc.textContent = "Peso Inválido";
		paciente[i].classList.add("paciente-invalido");
	}

	if(!alturaEhValida) {
		console.log("Altura Inválida");
		alturaEhValida = false;
		novoImc.textContent = "Altura Inválida";
		paciente[i].classList.add("paciente-invalido");
	}

	if(pesoEhValido && alturaEhValida){
		
		var imc = calculaImc(peso.textContent, altura.textContent);

		novoImc.textContent = imc;

	}
}

function validaPeso(peso) {

	if(peso >= 0 && peso < 200){
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura) {
	if(altura >= 0 && altura < 3){
		return true;
	} else {
		return false;
	}
}

function calculaImc(peso, altura){

	return (peso/(altura*altura)).toFixed(2);

}