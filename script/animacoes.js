  // Pulso infinito
  gsap.to("#pulsoInfinito", {
    duration: 1.5,
    scale: 1.05,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });

  // Animação de entrada da logo com GSAP
  gsap.from("#logo", {
    duration: 2.4,
    opacity: 0,
    x: -100,
    scale: 0.7,
    ease: "power2.out"
  });

    // Animação de entrada da logo branca com GSAP
    gsap.from("#logoBranca", {
      duration: 1.4,
      opacity: 0,
      x: -300,
      scale: 7,
      ease: "power2.out"
    });


  // Pulso infinito mais lento
  gsap.to("#pulsoInfinitolento", {
    duration: 3.0,
    scale: 1.10,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });


  // Seleciona todos os botões dentro do menu usando o id sugerido
  const botoesMenu = document.querySelectorAll('#menu-eclipse button');

  // Animação de entrada: cada botão aparece de baixo para cima com fade-in, em cascata
  botoesMenu.forEach((botao, i) => {
    gsap.from(botao, {
      duration: 1.7,
      color: "#EBC447",
      opacity: 0,
      y: 110,
      delay: 0.2 + i * 0.15,
      ease: "power2.out",
      clearProps: "all" // Remove propriedades inline ao final, garantindo que o CSS original prevaleça
    });
  });



// Ativa o plugin
gsap.registerPlugin(ScrollTrigger);

// Função para animar um elemento por ID
function animarScroll(id) {
  gsap.from(id, {
    scrollTrigger: {
      trigger: id,          // dispara quando o elemento entra na tela
      start: "top 80%",     // inicia quando o topo do elemento chega a 80% da tela
      toggleActions: "play none none reverse" 
    },
    opacity: 0,             // começa invisível
    y: 80,                  // desloca para baixo
    duration: 1.2,          // tempo da animação
    ease: "power3.out"      // suavização
  });
}

// Chama a função para cada ID
animarScroll("#animar-historia");
animarScroll("#animar-compromisso");
animarScroll("#animar-carrossel");

// Também anima a imagem dentro da div .imgNigth
gsap.from(".imgNigth img", {
  scrollTrigger: {
    trigger: ".imgNigth img",
    start: "top 85%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 60,
  scale: 0.92,
  duration: 1.2,
  ease: "power3.out"
});
