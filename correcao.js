document.addEventListener("DOMContentLoaded", function () {
document.getElementById("calculadora-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission (page reload)
    
    // Get the input values
    const valor = parseFloat(document.getElementById("valor").value);
    const aIni = parseInt(document.getElementById("aIni").value);
	const aFin = parseInt(document.getElementById("aFin").value);

    // Validate input
    if (isNaN(valor) || isNaN(aIni) || isNaN(aFin)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos.";
    } else {
        // Calculate and display the result
		const inflacaoUm = ((2024-aIni)*(0.1237/30))+((aIni-1994)*(1/30));
		const inflacaoDois = ((2024-aFin)*(0.1237/30))+((aFin-1994)*(1/30));
		const inflacaoDiff = inflacaoDois / inflacaoUm;
        const resultado = valor / inflacaoDiff;
		const perdaValor = (1 - (resultado / valor))*100;
        document.getElementById("resultado").innerHTML = `Valor final: R$ ${resultado.toFixed(2)}. Nesse período, o Real perdeu ${perdaValor.toFixed(2)}% do seu valor`;
    }
})});