function calcularImpacto() {
    const diasInput = document.getElementById('dias').value;
    const resultado = document.getElementById('resultado');
    
    const dias = parseInt(diasInput);

    // Validação
    if (isNaN(dias) || dias < 0 || dias > 7) {
        resultado.innerHTML = "⚠️ Por favor, insira um número entre 0 e 7 dias.";
        resultado.style.color = "#b91c1c";
        return;
    }

    resultado.style.color = "var(--accent)";

    // Mensagens rápidas e de alto impacto
    if (dias === 0) {
        resultado.innerHTML = "🌱 Começar com apenas 1 dia na semana já ajuda a impulsionar o mercado local sustentável. Que tal tentar?";
    } else if (dias <= 3) {
        resultado.innerHTML = `✨ Ótima escolha. Com ${dias} dias limpos por semana, você reduz consideravelmente sua pegada química anual e apoia pequenos produtores.`;
    } else {
        resultado.innerHTML = `🌍 Impacto excepcional! Consumir orgânicos na maior parte da semana protege ativamente os polinizadores e a microbiota do solo.`;
    }
}
