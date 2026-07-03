function calcularImpacto() {
    const dias = parseInt(document.getElementById("dias").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(dias) || dias < 0 || dias > 7) {
        resultado.textContent = "⚠️ Digite um número entre 0 e 7 dias.";
        resultado.style.color = "#b91c1c";
        return;
    }

    resultado.style.color = "#16a34a";

    let mensagem = "";

    switch (dias) {
        case 0:
            mensagem =
                "🌱 Você ainda não consome refeições orgânicas. Começar com apenas 1 dia por semana já faz diferença para sua saúde e para o meio ambiente.";
            break;

        case 1:
        case 2:
            mensagem =
                `🌿 Muito bom! Consumindo orgânicos ${dias} dia(s) por semana, você já reduz sua exposição a resíduos de agrotóxicos e incentiva a produção sustentável.`;
            break;

        case 3:
        case 4:
            mensagem =
                `✨ Excelente! Com ${dias} dias por semana, sua alimentação se torna mais saudável e você contribui para a preservação do solo, da água e da biodiversidade.`;
            break;

        case 5:
        case 6:
        case 7:
            mensagem =
                `🌍 Parabéns! Consumir orgânicos ${dias} dias por semana demonstra um forte compromisso com sua saúde, com os agricultores e com o futuro do planeta.`;
            break;
    }

    resultado.textContent = mensagem;
}
