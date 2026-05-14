// Função para rolagem suave ao clicar nos botões
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
}

// Efeito de mudança no menu ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = "0.5rem 5%";
        header.style.background = "#ffffffef";
    } else {
        header.style.padding = "1rem 5%";
        header.style.background = "#ffffff";
    }
});
