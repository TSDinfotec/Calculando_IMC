function calcularIMC() {
    // Obter os valores de peso e altura do usuário
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    // Validar se os campos foram preenchidos corretamente
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, preencha peso e altura corretamente.');
        return;
    }

    // Calcular o IMC (Índice de Massa Corporal)
    var imc = peso / (altura * altura);

    // Exibir o resultado do IMC
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h2>Seu IMC é ${imc.toFixed(2)}</h2>`;
}
