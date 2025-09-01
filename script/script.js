// Carrossel simples em JS puro

// Corrigido: garantir que o script só execute após o DOM estar carregado
document.addEventListener('DOMContentLoaded', function() {
    const carrosselCards = document.querySelector('.carrossel-cards');
    const btnAnterior = document.querySelector('.btn-carrossel.anterior');
    const btnProximo = document.querySelector('.btn-carrossel.proximo');
    const indicadores = document.querySelectorAll('.indicadores-carrossel .indicador');
    let indiceAtual = 0;

    // Corrigido: checar se carrosselCards existe antes de prosseguir
    if (!carrosselCards) return;

    const totalCards = carrosselCards.children.length;

    function atualizarCarrossel() {
        carrosselCards.style.transform = `translateX(-${indiceAtual * 100}%)`;
        indicadores.forEach((el, idx) => {
            el.classList.toggle('ativo', idx === indiceAtual);
        });
    }

    if (btnAnterior) {
        btnAnterior.addEventListener('click', () => {
            indiceAtual = (indiceAtual - 1 + totalCards) % totalCards;
            atualizarCarrossel();
        });
    }

    if (btnProximo) {
        btnProximo.addEventListener('click', () => {
            indiceAtual = (indiceAtual + 1) % totalCards;
            atualizarCarrossel();
        });
    }

    indicadores.forEach((el, idx) => {
        el.addEventListener('click', () => {
            indiceAtual = idx;
            atualizarCarrossel();
        });
    });

    // Swipe para mobile
    let startX = null;
    carrosselCards.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    carrosselCards.addEventListener('touchend', (e) => {
        if (startX === null) return;
        let endX = e.changedTouches[0].clientX;
        if (endX - startX > 40) {
            if (btnAnterior) btnAnterior.click();
        } else if (startX - endX > 40) {
            if (btnProximo) btnProximo.click();
        }
        startX = null;
    });

    // Inicializa
    atualizarCarrossel();
});