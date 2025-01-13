document.getElementById("ctaBtn").addEventListener("click", function() {
    alert("Você está a um passo de transformar o futuro da sua empresa! Nossa equipe entrará em contato em breve.");
});

// Validação do formulário de contato
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obter valores do formulário
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Validação
    if (name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Simular envio do formulário
    alert("Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.");
    
    // Limpar campos
    document.getElementById("contactForm").reset();
});
