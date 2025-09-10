// // Carrossel simples em JS puro

// // Corrigido: garantir que o script só execute após o DOM estar carregado
// document.addEventListener('DOMContentLoaded', function() {
//     const carrosselCards = document.querySelector('.carrossel-cards');
//     const btnAnterior = document.querySelector('.btn-carrossel.anterior');
//     const btnProximo = document.querySelector('.btn-carrossel.proximo');
//     const indicadores = document.querySelectorAll('.indicadores-carrossel .indicador');
//     let indiceAtual = 0;

//     // Corrigido: checar se carrosselCards existe antes de prosseguir
//     if (!carrosselCards) return;

//     const totalCards = carrosselCards.children.length;

//     function atualizarCarrossel() {
//         carrosselCards.style.transform = `translateX(-${indiceAtual * 100}%)`;
//         indicadores.forEach((el, idx) => {
//             el.classList.toggle('ativo', idx === indiceAtual);
//         });
//     }

//     if (btnAnterior) {
//         btnAnterior.addEventListener('click', () => {
//             indiceAtual = (indiceAtual - 1 + totalCards) % totalCards;
//             atualizarCarrossel();
//         });
//     }

//     if (btnProximo) {
//         btnProximo.addEventListener('click', () => {
//             indiceAtual = (indiceAtual + 1) % totalCards;
//             atualizarCarrossel();
//         });
//     }

//     indicadores.forEach((el, idx) => {
//         el.addEventListener('click', () => {
//             indiceAtual = idx;
//             atualizarCarrossel();
//         });
//     });

//     // Swipe para mobile
//     let startX = null;
//     carrosselCards.addEventListener('touchstart', (e) => {
//         startX = e.touches[0].clientX;
//     });
//     carrosselCards.addEventListener('touchend', (e) => {
//         if (startX === null) return;
//         let endX = e.changedTouches[0].clientX;
//         if (endX - startX > 40) {
//             if (btnAnterior) btnAnterior.click();
//         } else if (startX - endX > 40) {
//             if (btnProximo) btnProximo.click();
//         }
//         startX = null;
//     });

//     // Inicializa
//     atualizarCarrossel();
// });



document.addEventListener('DOMContentLoaded', function() {
    const carrosselCards = document.querySelector('.carrossel-cards');
    const btnAnterior = document.querySelector('.btn-carrossel.anterior');
    const btnProximo = document.querySelector('.btn-carrossel.proximo');
    const indicadores = document.querySelectorAll('.indicadores-carrossel .indicador');
    let indiceAtual = 0;

    if (!carrosselCards) return;

    const totalCards = carrosselCards.children.length;

    // --- Produtos (dados que serão exibidos) ---
    const produtos = [
        {
            titulo: "Creatina em pó - 150g",
            descricao: "Recuperação Muscular. Fórmula exclusiva com ingredientes selecionados.",
            tabela: "./image/Nigth/tabelaNigth3.png"
        },
        {
            titulo: "Pré-Treino - Nigth Training",
            descricao: "Suplemento alimentar em pastilhas mastigáveis. Energia e resistência durante os treinos.",
            tabela: "./image/Nigth/tabelaNigth2.png"
        },
        {
            titulo: "Glutamina",
            descricao: "Auxilia na recuperação muscular e fortalece o sistema imunológico.",
            tabela: "./image/Nigth/tabelaNigth.png"
        }
    ];

    // --- Referências na seção de detalhes ---
    const tituloDetalhe = document.querySelector('.detalhesProdutos .tituloProdutos h3');
    const descricaoDetalhe = document.querySelector('.detalhesProdutos .descicaoProduto p');
    const tabelaDetalhe = document.querySelector('.detalhesProdutos .tabelaProdutos');

    function atualizarDetalhes() {
        const produto = produtos[indiceAtual];
        tituloDetalhe.textContent = produto.titulo;
        descricaoDetalhe.textContent = produto.descricao;
        tabelaDetalhe.style.backgroundImage = `url(${produto.tabela})`;
    }

    function atualizarCarrossel() {
        carrosselCards.style.transform = `translateX(-${indiceAtual * 100}%)`;
        indicadores.forEach((el, idx) => {
            el.classList.toggle('ativo', idx === indiceAtual);
        });
        atualizarDetalhes(); // <-- sempre sincroniza a descrição
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
