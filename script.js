document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    const resultadoDiv = document.getElementById('resultado');
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Coleta dos valores inseridos
        const vIni = parseFloat(document.getElementById('vIni').value);
        const nPres = parseInt(document.getElementById('nPres').value);
        const modJuros = document.getElementById('modJuros').value;
        const pCapital = document.getElementById('pCapital').value;
        const taxaJuros = parseFloat(document.getElementById('taxaJuros').value) / 100;  // Convertendo a taxa de percentual para decimal

        // Verificação de dados válidos
        if (isNaN(vIni) || isNaN(nPres) || isNaN(taxaJuros) || vIni <= 0 || nPres <= 0 || taxaJuros <= 0) {
            resultadoDiv.textContent = "Por favor, preencha todos os campos corretamente.";
            return;
        }

        let resultado = 0;

        // Função para calcular juros simples
        function calcularJurosSimples() {
            resultado = vIni * (1 + taxaJuros * nPres);
        }

        // Função para calcular juros compostos
        function calcularJurosCompostos() {
            if (pCapital === 'aa') {
                resultado = vIni * Math.pow(1 + taxaJuros, nPres);
            } else if (pCapital === 'am') {
                resultado = vIni * Math.pow(1 + taxaJuros / 12, nPres); // Juros mensais
            }
        }

        // Seleciona o cálculo de juros simples ou compostos
        if (modJuros === 'simples') {
            calcularJurosSimples();
        } else if (modJuros === 'composto') {
            calcularJurosCompostos();
        }

        // Exibe o resultado na página
        resultadoDiv.textContent = `O valor final após ${nPres} períodos é: R$ ${resultado.toFixed(2)}`;
    });
});

