  // Pulso infinito
  gsap.to("#pulsoInfinito", {
    duration: 1.5,
    scale: 1.05,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });


  // Pulso infinito mais lento
  gsap.to("#pulsoInfinitolento", {
    duration: 3.0,
    scale: 1.10,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });


  // Para animar os botões do menu, adicione o id "menu-eclipse" na div que contém os botões no HTML:
  // <div class="menu-eclipse" id="menu-eclipse">
  // Agora, animamos os botões filhos dessa div:

  // Seleciona todos os botões dentro do menu usando o id sugerido
  const botoesMenu = document.querySelectorAll('#menu-eclipse button');

  // Aplica uma animação GSAP em cada botão do menu
  botoesMenu.forEach((botao, i) => {
    // Animação de entrada: cada botão aparece da direita para a esquerda com fade-in, em sequência
    gsap.from(botao, {
      duration: 5, // duração da animação
      opacity: 0,    // começa invisível
      y: 20,        // começa 120px à direita
      delay: 0.2 + i * 0.15, // atraso para efeito cascata
      ease: "power2.out"
    });

    // Animação de hover: aumenta levemente e brilha ao passar o mouse
    botao.addEventListener('mouseenter', () => {
      gsap.to(botao, {
        duration: 0.3,
        scale: 1.12, // aumenta o tamanho
        boxShadow: "0 0 16px #ffb700", // brilho amarelo
        ease: "power1.out"
      });
    });

    // Volta ao normal ao sair o mouse
    botao.addEventListener('mouseleave', () => {
      gsap.to(botao, {
        duration: 0.3,
        scale: 1,
        boxShadow: "0 0 0px transparent",
        ease: "power1.in"
      });
    });
  });


