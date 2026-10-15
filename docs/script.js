// Funcionalidade simples para os pontos (dots) do slider visual na seção Hero
document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Remove a classe 'active' de todos os pontos
            dots.forEach(d => d.classList.remove('active'));
            
            // Adiciona a classe 'active' ao ponto clicado
            dot.classList.add('active');
            
            // Aqui pode ser adicionada a lógica futura para mudar a imagem de fundo
            console.log(`Slide mudou para o índice: ${index}`);
        });
    });
});