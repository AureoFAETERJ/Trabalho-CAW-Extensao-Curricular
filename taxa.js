document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculadora-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário (recarregar a página)
        
        // Obter os valores inseridos
        const valor = parseFloat(document.getElementById("valor").value);
        const taxa = parseFloat(document.getElementById("tPorCento").value) / 100;

        // Validar os dados
        if (isNaN(valor) || isNaN(taxa)) {
            document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos.";
            document.getElementById("resultado").style.display = "block"; // Mostrar o resultado
        } else {
            // Calcular e exibir o resultado
            const resultado = valor * (1 - taxa);
            document.getElementById("resultado").innerHTML = `Valor líquido: R$ ${resultado.toFixed(2)}`;
            document.getElementById("resultado").style.display = "block"; // Mostrar o resultado
        }
    });
});

