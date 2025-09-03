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


